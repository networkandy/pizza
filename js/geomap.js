document.querySelector('.location').addEventListener('click', 
changeImage);

function changeImage(e){

    var images = [
                 '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24203.55455196894!2d-73.99731463897021!3d40.6862110964081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7aee55cce3151c53!2sThe+House+of+Pizza+%26+Calzone!5e0!3m2!1sen!2sus!4v1548122068377" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57445.572377226854!2d-73.92498082198269!3d40.82605034033697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe9df0ab2eb87421b!2sFamous+Anthonys+Pizzeria!5e0!3m2!1sen!2sus!4v1548122311487" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40673.17682325481!2d-73.8690861449877!3d40.73888229998808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c440ea3c4500ecf!2sElmhurst+Famous+Pizza!5e0!3m2!1sen!2sus!4v1548122414325" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48446.24356929654!2d-74.16075766958926!3d40.63230286102072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ddfb3b6a62ee2d0!2sFamous+New+York+Pizza!5e0!3m2!1sen!2sus!4v1548122501144" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
                     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28626.836511331094!2d-73.55600592328507!3d41.046570888789155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf790b1ab505edae8!2sTony&#39;s+Brick+Oven+Pizza!5e0!3m2!1sen!2sus!4v1548122867927" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.6341180906322!2d-72.91957769190569!3d41.30302794481802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x791f5eef0a1b45fa!2sFrank+Pepe+Pizzeria+Napoletana!5e0!3m2!1sen!2sus!4v1548122945451" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
                     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14156.324993185677!2d-72.69205451981827!3d41.76364195833891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe0fbdcdf0b8a542f!2sPietro&#39;s+Pizza!5e0!3m2!1sen!2sus!4v1548123034666" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
                '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5079854224086!2d-72.92897568506582!3d41.31956597927041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9b914a33f2f%3A0xbccfe803f2d7b120!2s19+Woodland+St%2C+New+Haven%2C+CT+06511!5e0!3m2!1sen!2sus!4v1548121333809" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>'
            ];


    
        if(e.target.id === 'Manhattan'){

        var map = document.querySelector('.map').innerHTML = images[7];
    }


    if(e.target.id === 'Brooklyn'){
        var map = document.querySelector('.map').innerHTML = images[0]
    }

    if(e.target.id === 'Bronx'){
        var map = document.querySelector('.map').innerHTML = images[1]
    }

    if(e.target.id === 'Queens'){
        var map = document.querySelector('.map').innerHTML = images[2]
    }

    if(e.target.id === 'Staten Island'){
        var map = document.querySelector('.map').innerHTML = images[3]
    }

    if(e.target.id === 'Stamford'){
        var map = document.querySelector('.map').innerHTML = images[4]
    }

    if(e.target.id === 'New Haven'){
        var map = document.querySelector('.map').innerHTML = images[5]
    }

    if(e.target.id === 'Hartford'){
        var map = document.querySelector('.map').innerHTML = images[6]
    }



    e.preventDefault();
}