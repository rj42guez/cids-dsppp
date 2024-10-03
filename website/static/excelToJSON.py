import pandas as pd
import json

# Convert Excel To Json With Python
data = pd.read_excel("website\static\dswg.xlsx", sheet_name='Sheet1')
json_data = data.to_json()

# Print the JSON data
print(json_data)