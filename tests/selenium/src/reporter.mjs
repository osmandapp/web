import junit from "junit-report-builder";
import marge from "mochawesome-report-generator";

const results = [];

export function recordResult({ file, status, error, runtime }) {
  results.push({
    file,
    status,
    error: error ? { message: error.message, stack: error.stack } : null,
    runtime,
    timestamp: new Date(),
  });
}

export async function generateReport() {
  const reporter = process.env.REPORTER || "spec";

  if (reporter === "junit") {
    const suite = junit.testSuite().name("selenium-tests");
    results.forEach((r) => {
      const t = suite
        .testCase()
        .className("selenium")
        .name(r.file)
        .time(r.runtime / 1000);
      if (r.status === "failed") {
        t.failure(r.error?.message || "Unknown error", r.error?.stack || "");
      }
    });
    junit.writeTo("test-results/results.xml");
    console.log("JUnit report written to test-results/results.xml");
  } else if (reporter === "html") {
    await marge.create({
      results,
      reportDir: "mochawesome-report",
      inline: true,
      overwrite: true,
    });
    console.log("HTML report written to mochawesome-report/");
  } else {
    // Default: just console spec output (your existing loggers already do this)
  }
}
