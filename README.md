# Generator of travel certificate

99 % of this project is coming from https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020 not me (I just add the profil feature)

### Install the project

```console
git clone
cd attestation-deplacement-derogatoire-q4-2020
npm i
```

### Creation of profiles

We need to create folder that will contains your profiles, if you skip this step the project will not work correctly. I add profiles.json in gitignore in order to prevent sharing your private data.

In order to achieve this, you need to create `\src\profiles\profiles.json`

```console
mkdir .\src\profiles && touch .\src\profiles\profiles.json

echo [{"profilname": "fake","firstname": "fake","lastname": "fake","birthday": "01/01/1900","placeofbirth": "fake","address": "fake","city": "fake","zipcode": "00000"}] > .\src\profiles\profiles.json
```

### Run the project

```console
npm start
```
