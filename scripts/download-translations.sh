#!/bin/bash
rm -Rf ./public/locales/

lokalise2 file download --unzip-to ./public/ --format json --token 8e6d1a741cfd0b5680f3c25896454e7e9391dae7 --project-id 5084528566c4ed69a92f14.88806041 --bundle-structure=locales/%LANG_ISO%/translation.%FORMAT% --original-filenames=false --export-empty-as=base