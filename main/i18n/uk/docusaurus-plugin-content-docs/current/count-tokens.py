import os
import argparse
import sys

def count_tokens_in_file(filepath):
    """
    Reads a file and returns a rough count of tokens (words).

    Args:
        filepath (str): The path to the file.

    Returns:
        int: The approximate number of tokens in the file, or 0 if an error occurs.
    """
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            # Simple whitespace split for a rough token count
            tokens = content.split()
            return len(tokens)
    except FileNotFoundError:
        print(f"Error: File not found - {filepath}", file=sys.stderr)
        return 0
    except PermissionError:
        print(f"Error: Permission denied - {filepath}", file=sys.stderr)
        return 0
    except Exception as e:
        print(f"Error reading file {filepath}: {e}", file=sys.stderr)
        return 0

def count_tokens_in_folder(folder_path):
    """
    Recursively counts tokens in all .md files within a given folder.

    Args:
        folder_path (str): The path to the folder to scan.

    Returns:
        int: The total approximate token count across all .md files.
    """
    total_tokens = 0
    file_count = 0

    print(f"Scanning folder: {folder_path}")

    # os.walk traverses the directory tree (root, dirs, files)
    for root, _, files in os.walk(folder_path):
        for filename in files:
            # Check if the file has a .md extension
            if filename.lower().endswith(".md"):
                filepath = os.path.join(root, filename)
                print(f"  Processing: {filepath}...")
                tokens_in_file = count_tokens_in_file(filepath)
                print(f"    Tokens: {tokens_in_file}")
                total_tokens += tokens_in_file
                file_count += 1

    print(f"\nFinished scanning.")
    print(f"Processed {file_count} markdown files.")
    return total_tokens

if __name__ == "__main__":
    # Set up argument parser
    parser = argparse.ArgumentParser(
        description="Recursively count approximate tokens in Markdown (.md) files within a folder."
    )
    parser.add_argument(
        "folder",
        type=str,
        help="The path to the folder containing Markdown files."
    )

    # Parse arguments
    args = parser.parse_args()

    # Check if the folder exists
    if not os.path.isdir(args.folder):
        print(f"Error: Folder not found - {args.folder}", file=sys.stderr)
        sys.exit(1) # Exit with an error code

    # Perform the token count
    total_count = count_tokens_in_folder(args.folder)

    # Print the final result
    print(f"\nTotal approximate token count in all .md files: {total_count}")

