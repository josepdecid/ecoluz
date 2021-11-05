import csv
import json
import os

with open('translations/translations.csv', mode='r') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    
    header = next(reader)
    languages = header[1:]
    lang_to_idx = {lang: i for i, lang in enumerate(languages)}

    result_translations = {lang: {} for lang in header[1:]}

    for row in reader:
        if len(row) == 0:
            continue
        
        key = row[0]
        key = key.split('.')

        translations = row[1:]

        for lang in languages:
            target_dict = result_translations[lang]
            langTranslation = translations[lang_to_idx[lang]]

            for part in key[:-1]:
                if part not in target_dict:
                    target_dict[part] = {}
                target_dict = target_dict[part]
            
            target_dict[key[-1]] = langTranslation

    for lang in languages:
        data = json.dumps(result_translations[lang])

        with open(os.path.join('translations', 'build', lang.lower() + '.json'), mode='w') as output_file:
            output_file.write(data)