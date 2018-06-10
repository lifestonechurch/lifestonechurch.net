# Lifestone Church Website

# Contributing

If you would like to contribute:

* Fork this repository
* Clone it to your computer
* Run `bundle install`
* Run `bundle exec jekyll serve`
* Go to `localhost:4000` in your browser
* Now you can edit the site and the site will get generated automatically (but you'll still need to hit refresh in the browser)
* Then you can submit a pull request to have it added to the live site

## Adding Sermons

1. Edit audio file.
    - Get the audio file from the hard drive at the sound booth. There will probably be 2 files from the 2 services. Use the second one.
    - In Audacity, amplify the sound (Effect -> Amplify...).
    - In Audacity, cut the beginning and end of the audio. At the end, cut it right before the prayer.
    - Export the file as an mp3 and name is as the date in this format: YYYY-MM-DD.mp3 (example: 2017-12-31).
2. Upload file.
    - Upload to Amazon AWS.
3. Add markdown file.
    - Add the markdown file to the `_sermons` folder in this git repo. Make sure you fill out the "front matter" data at the top of the file.
    - In a few seconds, the site should be updated.
    - Make sure it looks as expected and that the audio plays correctly.
