# Folder structure
source: https://www.youtube.com/watch?v=7SDpTOLeqHE

## Details
* Each route/element of nav has it's own folder
* Each folder is divided to 4 more folders (not all of them has to be included)
    * /data-access -> services comunicating with the api
    * /feature -> "smart" components, prepare data for the presentation components
    * /ui -> "dumb" components used just for the presentation of the data
    * /utils -> Helper functions should live there
* There is one additional folder called /shared
    * It is designed to hold components that are used on more than one page.
    * It's structure should be the same as the route folders so: da, feature, ui and utils.
    * Each component there should follow SCAM(Single Component Angular Module) approach,
        which means each component has it's own module
* feature-shell is a module added to /feature if there is more than one route available. This module is used for routing on the page. 7:25 - 9:00 on the video.