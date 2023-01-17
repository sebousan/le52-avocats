# Netlify CMS

## Deploy key
Générer et copier la deploy key du site sur Netlify : `Site settings > Build & deploy > Deploy key`.

L’ajouter dans la section “Deploy keys” du repository contenant le thème : https://github.com/sebousan/hugo-theme/settings/keys

## Identity

Pour créer des comptes utilisateur pour Netlify CMS il faut activer l’Identify Netlify : `Site settings > Identity > Enable`.

## Emails notifications
Pour rediriger chaque template email vers ceux du repo : `Site settings > Identity > Email`.

Puis modifier le path :
* Invitation template : `/admin/emails/invitation.html` 
* Confirmation template : `/admin/emails/confirmation.html`
* Recovery template : `/admin/emails/recovery.html`
* Email change template : `/admin/emails/email-change.html`

## Git Gateway
Pour connecter Netlify CMS à l’API de Github, il faut l’activer : `Site settings > Identity > Services > Enable Git Gateway`.
