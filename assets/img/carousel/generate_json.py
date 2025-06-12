import os
import json

def generate_json_paths_file() -> None:
    """
    Generate a JSON file containing the paths of all images in the carousel directory.
    """
    main_array = []
    images_folder = './'
    for image in sorted(os.listdir(images_folder)):
        if image.lower().endswith('.py'):
            continue
        images_properties = {}
        images_properties["name"] = image
        alt_property = image.split('.')[0].split('_')
        alt_property = [x.capitalize() for x in alt_property]
        del alt_property[0]
        alt_property = " ".join(alt_property)
        images_properties["alt"] = alt_property
        images_properties["href"] = "#"
        main_array.append(images_properties)
    with open("../../data/carousel.json", "w") as json_file:
        json.dump(main_array, json_file, indent=2)

if __name__ == "__main__":
    generate_json_paths_file()
