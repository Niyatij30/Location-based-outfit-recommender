import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import pickle

import pandas as pd
# import random
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
df = pd.read_csv('styles.csv',on_bad_lines='skip')
dfi = pd.read_csv('images.csv',on_bad_lines = 'skip')
dfi['id'] = dfi['filename'].str.replace('.jpg', '').astype(int)
dfi.drop('filename',axis=1,inplace=True)
df = pd.merge(df, dfi, on='id', how='inner')
df = df[df['subCategory'] != 'Innerwear']
df = df[df['subCategory'] != 'Loungewear and Nightwear']
locations = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad',
             'Jaipur', 'Lucknow', 'Ahmedabad', 'Srinagar', 'Goa', 'Kochi',
             'Guwahati', 'Bhopal', 'Shimla']

def extract_company_name(product_name):
    if isinstance(product_name, str):
        return product_name.split()[0]
    else:
        return None
df['company'] = df['productDisplayName'].apply(extract_company_name)

# Create a function to determine location based on row values
def determine_location(row):
    # Example heuristic: combine certain columns to create an index
    index = (hash(row['gender']) + hash(row['masterCategory']) + 
             hash(row['subCategory']) + hash(row['articleType']) + 
             hash(row['baseColour']) + hash(row['season']) + 
             hash(row['year']) + hash(row['usage']) ) % len(locations)
    return locations[index]

# Apply the function to each row
df['location'] = df.apply(determine_location, axis=1)
fabric_options = {
    'Jeans': ['denim', 'cotton', 'polyester', 'blend', 'corduroy', 'canvas'],
    'Kurtas': ['cotton', 'silk', 'linen', 'khadi', 'rayon', 'wool'],
    'Tshirts': ['cotton', 'polyester', 'nylon', 'spandex', 'viscose', 'modal'],
    'Shirts': ['cotton', 'polyester', 'nylon', 'spandex', 'viscose', 'modal'],
    'Sweatshirts': ['fleece', 'cotton', 'polyester', 'wool', 'blend', 'cashmere'],
    'Shorts': ['nylon', 'cotton', 'polyester', 'spandex', 'linen', 'silk'],
    'Track Pants': ['cotton', 'polyester', 'nylon', 'blend', 'fleece', 'spandex'],
    'Kurtis': ['cotton', 'silk', 'chiffon', 'georgette', 'linen', 'rayon'],
    'Kurta Sets': ['cotton', 'silk', 'velvet', 'chanderi', 'banarasi', 'organza'],
    'Tops': ['cotton', 'polyester', 'silk', 'lace', 'chiffon', 'viscose'],
    'Waistcoat': ['silk', 'cotton', 'polyester', 'wool', 'blend', 'linen'],
    'Sarees': ['silk', 'cotton', 'chiffon', 'georgette', 'linen', 'banarasi'],
    'Night suits': ['cotton', 'satin', 'flannel', 'velvet', 'fleece', 'silk'],
    'Shrug': ['cotton', 'polyester', 'silk', 'lace', 'chiffon', 'viscose'],
    'Trousers': ['cotton', 'polyester', 'wool', 'blend', 'linen', 'corduroy'],
    'Capris': ['cotton', 'polyester', 'nylon', 'spandex', 'linen', 'silk'],
    'Jackets': ['leather', 'nylon', 'polyester', 'wool', 'blend', 'down'],
    'Lounge Pants': ['cotton', 'fleece', 'polyester', 'silk', 'velvet', 'satin'],
    'Tunics': ['cotton', 'silk', 'chiffon', 'georgette', 'linen', 'rayon'],
    'Skirts': ['cotton', 'silk', 'polyester', 'wool', 'denim', 'velvet'],
    'Tracksuits': ['polyester', 'nylon', 'cotton', 'spandex', 'fleece', 'mesh'],
    'Swimwear': ['nylon', 'polyester', 'spandex', 'lycra', 'mesh', 'neoprene'],
    'Jumpsuit': ['cotton', 'polyester', 'silk', 'denim', 'linen', 'spandex'],
    'Dupatta': ['silk', 'cotton', 'chiffon', 'georgette', 'banarasi', 'velvet'],
    'Sweaters': ['wool', 'cashmere', 'blend', 'cotton', 'polyester', 'acrylic'],
    'unknown': ['cotton','nylon','polyester']
}

# Create a function to determine fabric based on row values
def determine_fabric(row):
    article_type = row['articleType']
    if article_type in fabric_options:
        # Example heuristic: combine certain columns to create an index
        index = (hash(row['gender']) + hash(row['masterCategory']) + 
                 hash(row['subCategory']) + hash(row['articleType']) + 
                 hash(row['baseColour']) + hash(row['season']) + 
                 hash(row['year']) + hash(row['usage']) + hash(row['location'])) % len(fabric_options[article_type])
        see = index
        see2 = fabric_options[article_type][index]
        return fabric_options[article_type][index]
    else:
        return 'fabric_unknown'

# Apply the function to each row
df['fabric'] = df.apply(determine_fabric, axis=1)
fit_options = {
    'Jeans': ['flared', 'baggy', 'loose', 'skinny', 'straight', 'bootcut'],
    'Kurtas': ['loose', 'fitted', 'anarkali', 'straight', 'asymmetric', 'layered'],
    'Tshirts': ['regular', 'slim', 'athletic', 'oversized', 'fitted', 'boxy'],
    'Shirt': ['regular fit', 'slim fit', 'tailored fit', 'classic fit', 'relaxed fit', 'muscle fit'],
    'Sweatshirts': ['relaxed', 'fitted', 'oversized', 'cropped', 'boxy', 'athletic'],
    'Shorts': ['athletic', 'casual', 'tailored', 'cargo', 'running', 'bermuda'],
    'Track Pants': ['comfortable', 'fitted', 'relaxed', 'slim', 'athletic', 'jogger'],
    'Kurtis': ['loose', 'fitted', 'anarkali', 'straight', 'asymmetric', 'layered'],
    'Kurta Sets': ['ethnic', 'traditional', 'modern', 'contemporary', 'fusion', 'festive'],
    'Tops': ['regular', 'crop', 'off-shoulder', 'peplum', 'halterneck', 'wrap'],
    'Waistcoat': ['formal', 'casual', 'ethnic', 'tailored', 'traditional', 'stylish'],
    'Sarees': ['traditional', 'designer', 'bridal', 'contemporary', 'printed', 'embroidered'],
    'Night suits': ['comfortable', 'fitted', 'oversized', 'classic', 'cozy', 'stylish'],
    'Shrug': ['casual', 'formal', 'boho', 'cropped', 'layered', 'chic'],
    'Trousers': ['formal', 'casual', 'tailored', 'slim', 'wide-leg', 'cropped'],
    'Capris': ['athletic', 'casual', 'tailored', 'cropped', 'cargo', 'bermuda'],
    'Jackets': ['fitted', 'bomber', 'oversized', 'tailored', 'biker', 'puffer'],
    'Lounge Pants': ['comfortable', 'fitted', 'relaxed', 'cozy', 'stylish', 'athleisure'],
    'Tunics': ['regular', 'asymmetric', 'layered', 'longline', 'boho', 'peplum'],
    'Skirts': ['feminine', 'flared', 'pleated', 'pencil', 'maxi', 'mini'],
    'Tracksuits': ['athletic', 'casual', 'sporty', 'cozy', 'jogger', 'stylish'],
    'Swimwear': ['athletic', 'fitted', 'beach', 'sporty', 'high-waisted', 'bikini'],
    'Jumpsuit': ['stylish', 'fitted', 'wide-leg', 'casual', 'tailored', 'flared'],
    'Dupatta': ['traditional', 'embroidered', 'printed', 'designer', 'festive', 'stylish'],
    'Sweaters': ['warm', 'cozy', 'fitted', 'oversized', 'turtleneck', 'cardigan'],
    'Unknown Product Type': ['regular'],
}

# Create a function to determine fit based on row values
def determine_fit(row):
    article_type = row['articleType']
    if article_type in fit_options:
        # Example heuristic: combine certain columns to create an index
        index = (hash(row['gender']) + hash(row['masterCategory']) + 
                 hash(row['subCategory']) + hash(row['articleType']) + 
                 hash(row['baseColour']) + hash(row['season']) + 
                 hash(row['year']) + hash(row['usage']) + hash(row['location']) + hash(row['fabric'])) % len(fit_options[article_type])
        return fit_options[article_type][index]
    else:
        return 'regular'

# Apply the function to each row
df['fit'] = df.apply(determine_fit, axis=1)

# Save the updated DataFrame to a new CSV file
df.to_csv('Corelated.csv', index=False)
# Load the CSV file
df = pd.read_csv('Corelated.csv')
rows_to_remove = [6044, 7939, 9926, 10264, 10427, 10906, 11373, 11945, 14112, 14532, 15076, 33020, 35962, 37770, 38404]
df = df.drop(rows_to_remove)
df = df[df['masterCategory'] == 'Apparel']
# df.drop('id',axis=1,inplace=True)
df.drop('productDisplayName',axis=1,inplace=True)
df.drop('masterCategory',axis=1,inplace=True)
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

le_location = LabelEncoder()
le_gender = LabelEncoder()

df['location_encoded'] = le_location.fit_transform(df['location'])
df['gender_encoded'] = le_gender.fit_transform(df['gender'])
df.to_csv('Corelated.csv', index=False)
df_encoded = df.apply(LabelEncoder().fit_transform)

X = df_encoded.drop(['location', 'gender', 'location_encoded'], axis=1)
y = df_encoded['location_encoded']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
print('Classification Report:')
print(classification_report(y_test, y_pred))

with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)
with open('le_location.pkl', 'wb') as f:
    pickle.dump(le_location, f)
with open('le_gender.pkl', 'wb') as f:
    pickle.dump(le_gender, f)
