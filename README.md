# Générateur de certificat de déplacement

Ce projet proviens de https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020

J'ai seulement ajouter l'ajout de profiles afin de pouvoir pre-remplir certains champs en fonction du profil selectionne

## Développer

### Installer le projet

```console
git clone
cd attestation-deplacement-derogatoire-q4-2020
npm i
```

### Creation des profiles

Ensuite il faut cree un dossier qui contiendras vos profiles, si vous ne le cree pas, le projet ne marchera pas. Vous etes obliger d'effectuer cette operation car le fichier contenant vos profils ne sont pas commit par git par securite.

Pour cela, il faut cree un fichier `\src\profiles\profiles.json`

```console
mkdir .\src\profiles && touch .\src\profiles\profiles.json

echo [{"profilname": "fake","firstname": "fake","lastname": "fake","birthday": "01/01/1900","placeofbirth": "fake","address": "fake","city": "fake","zipcode": "00000"}] > .\src\profiles\profiles.json
```

### Lancer le projet

```console
npm start
```
