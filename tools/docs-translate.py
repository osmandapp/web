import os
import hashlib
import json
from datetime import datetime
from pathlib import Path

def calculate_file_hash(file_path):
    """Calculate the SHA-256 hash of a file's content and return the first 20 characters."""
    sha256_hash = hashlib.sha256()
    with open(file_path, "rb") as f:
        for byte_block in iter(lambda: f.read(4096), b""):
            sha256_hash.update(byte_block)
    return sha256_hash.hexdigest()[:20]

def get_last_modified_date(file_path):
    """Get the last modified date of a file in the format DD.MM.YYYY."""
    timestamp = os.path.getmtime(file_path)
    return datetime.fromtimestamp(timestamp).strftime("%d.%m.%Y")

def index_folder(base_folder, docs_folder):
    """Index all .md files in the folder recursively."""
    index = {}
    for root, _, files in os.walk(docs_folder):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, base_folder)
                file_hash = calculate_file_hash(file_path)
                last_modified_date = get_last_modified_date(file_path)
                index[relative_path] = {
                    "hash": file_hash,
                    "lastModifiedDate": last_modified_date,
                    "locales": {},
                }
    return index

def add_translations_to_index(index, base_folder):
    """Add translations from the i18n folder to the index."""
    i18n_folder = os.path.join(base_folder, "i18n")
    if not os.path.exists(i18n_folder):
        return index

    for locale in os.listdir(i18n_folder):
        locale_folder = os.path.join(i18n_folder, locale, "docusaurus-plugin-content-docs", "current")
        if not os.path.exists(locale_folder):
            continue

        for root, _, files in os.walk(locale_folder):
            for file in files:
                if file.endswith(".md"):
                    file_path = os.path.join(root, file)
                    relative_path = os.path.relpath(file_path, locale_folder)
                    relative_path = os.path.join("docs", relative_path)  # Match the main docs structure
                    if relative_path in index:
                        file_hash = calculate_file_hash(file_path)
                        last_modified_date = get_last_modified_date(file_path)
                        index[relative_path]["locales"][locale] = {
                            "hash": file_hash,
                            "lastModifiedDate": last_modified_date,
                        }
    return index

def save_index(index, output_file):
    """Save the index to a JSON file."""
    with open(output_file, "w") as f:
        json.dump(index, f, indent=4)

def main():
    # Get the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Define the docs folder relative to the script
    docs_folder = os.path.join(script_dir, "..", "main", "docs")
    # Define the output file
    output_file = os.path.join(script_dir, ".content-index.json")

    # Index the main docs folder
    index = index_folder(os.path.dirname(docs_folder), docs_folder)
    # Add translations from the i18n folder
    index = add_translations_to_index(index, os.path.dirname(docs_folder))
    # Save the index to the output file
    save_index(index, output_file)
    print(f"Index saved to {output_file}")

if __name__ == "__main__":
    main()