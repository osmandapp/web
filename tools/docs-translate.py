import os
import hashlib
import json
from datetime import datetime
from pathlib import Path

def calculate_hash(content):
    """Calculate the SHA-256 hash of a string and return the first 20 characters."""
    sha256_hash = hashlib.sha256(content.encode("utf-8")).hexdigest()[:20]
    return sha256_hash

def get_last_modified_date(file_path):
    """Get the last modified date of a file in the format DD.MM.YYYY."""
    timestamp = os.path.getmtime(file_path)
    return datetime.fromtimestamp(timestamp).strftime("%d.%m.%Y")

def split_into_chunks(content, max_chars=10000):
    """Split Markdown content into logical chunks based on headings or max characters."""
    chunks = []
    current_chunk = ""
    lines = content.split("\n")

    for line in lines:
        # If the line is a heading, finalize the current chunk and start a new one
        if line.startswith("# ") or line.startswith("## "):
            if current_chunk:
                chunks.append(current_chunk.strip())
                current_chunk = ""
        current_chunk += line + "\n"

        # If the current chunk exceeds the max character limit, finalize it
        if len(current_chunk) >= max_chars:
            chunks.append(current_chunk.strip())
            current_chunk = ""

    # Add the remaining content as the last chunk
    if current_chunk:
        chunks.append(current_chunk.strip())

    return chunks

def index_file(file_path, base_folder):
    """Index a Markdown file by splitting it into chunks and calculating their hashes."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    chunks = split_into_chunks(content)
    relative_path = os.path.relpath(file_path, base_folder)
    last_modified_date = get_last_modified_date(file_path)

    return {
        "path": relative_path,
        "lastModifiedDate": last_modified_date,
        "chunks": [{"preview": chunk.split("\n")[0], 
                    "length": len(chunk), "hash": calculate_hash(chunk)} for chunk in chunks],
    }

def index_folder(base_folder, docs_folder):
    """Index all .md files in the folder recursively."""
    index = {}
    for root, _, files in os.walk(docs_folder):
        for file in files:
            if file.endswith(".md"):
                file_path = os.path.join(root, file)
                file_index = index_file(file_path, base_folder)
                index[file_index["path"]] = file_index
    return index

def compare_chunks(old_chunks, new_chunks):
    """Compare old and new chunks to detect changes."""
    changes = {
        "added": [],
        "deleted": [],
        "modified": [],
    }

    # Create dictionaries for quick lookup
    old_chunks_dict = {i: chunk for i, chunk in enumerate(old_chunks)}
    new_chunks_dict = {i: chunk for i, chunk in enumerate(new_chunks)}

    # Check for added or modified chunks
    for i, new_chunk in new_chunks_dict.items():
        if i >= len(old_chunks_dict) or new_chunk["hash"] != old_chunks_dict[i]["hash"]:
            changes["added"].append(new_chunk)

    # Check for deleted chunks
    for i, old_chunk in old_chunks_dict.items():
        if i >= len(new_chunks_dict) or old_chunk["hash"] != new_chunks_dict[i]["hash"]:
            changes["deleted"].append(old_chunk)

    return changes

def print_changes(changes, file_path):
    """Print changes in a user-friendly format."""
    for change_type, chunks in changes.items():
        if chunks:
            print(f"In '{file_path}':")
            for chunk in chunks:
                if change_type == "added":
                    print(f"  - Block '{chunk['preview']}...' (hash: {chunk['hash']}) has been added and needs to be translated.")
                elif change_type == "deleted":
                    print(f"  - Block '{chunk['preview']}...' (hash: {chunk['hash']}) has been deleted and needs to be removed from translations.")

def save_index(index, output_file):
    """Save the index to a JSON file."""
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(index, f, indent=4, ensure_ascii=False)

def load_existing_index(index_file):
    """Load the existing index from a JSON file."""
    if os.path.exists(index_file):
        with open(index_file, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}

def main():
    # Get the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Define the docs folder relative to the script
    docs_folder = os.path.join(script_dir, "..", "main", "docs")
    # Define the output file
    output_file = os.path.join(script_dir, ".content-index.json")

    # Load the existing index (if it exists)
    existing_index = load_existing_index(output_file)

    # Index the main docs folder
    new_index = index_folder(os.path.dirname(docs_folder), docs_folder)

    # Compare the new index with the existing one
    for file_path, file_data in new_index.items():
        if file_path in existing_index:
            changes = compare_chunks(existing_index[file_path]["chunks"], file_data["chunks"])
            if any(changes.values()):
                print_changes(changes, file_path)
        else:
            print(f"In '{file_path}': All blocks are new and need to be translated.")

    # Save the new index
    save_index(new_index, output_file)
    print(f"Index saved to {output_file}")

if __name__ == "__main__":
    main()