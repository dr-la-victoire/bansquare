import os

files = sorted(
    f for f in os.listdir(".")
    if os.path.isfile(f)
)

# -------- PASS 1: temporary names --------
temp_names = []

for i, filename in enumerate(files, start=1):
    _, ext = os.path.splitext(filename)

    if not ext:
        continue

    temp_name = f"__temp__{i}{ext}"
    os.rename(filename, temp_name)
    temp_names.append(temp_name)

# -------- PASS 2: final names --------
counter = 1

for filename in temp_names:
    _, ext = os.path.splitext(filename)
    new_name = f"img-{counter}{ext}"

    print(f"{filename} -> {new_name}")
    os.rename(filename, new_name)
    counter += 1

print("All files renamed successfully.")
