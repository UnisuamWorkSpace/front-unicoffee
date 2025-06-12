import os
import json

def generate_json() -> None:
    """
    Generate a JSON file containing the paths of all images in the carousel directory.
    """
    init = []
    carousel_dir = './'
    for file in os.listdir(carousel_dir):
        if file.lower().endswith('.py'):
            continue
        part_dict = {}
        part_dict["path"] = file
        alt = file.split('.')[0].split('_')
        alt = [x.capitalize() for x in alt]
        del alt[0]
        alt = " ".join(alt)
        part_dict["alt"] = alt
        part_dict["href"] = "#"
        init.append(part_dict)
        pass
    with open("../../data/carousel.json", "w") as json_file:
        json.dump(init, json_file, indent=2)
generate_json()
