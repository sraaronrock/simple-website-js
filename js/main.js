jQuery(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){
        jQuery('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    //Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Example Title 1',
                date: 'Publised ' + moment().format("MMMM Do YYYY"),
                content: 'Cras convallis sagittis sapien, et scelerisque turpis porttitor at. Duis ac dignissim justo, in tincidunt augue. Sed est lorem, venenatis vel lacinia in, iaculis at ante. Aliquam ut felis pellentesque, dapibus nibh ac, gravida elit. Etiam convallis massa in eleifend elementum. Vivamus at metus porttitor est interdum interdum nec at neque. Donec vulputate, libero quis eleifend tincidunt, metus velit interdum arcu, ut consectetur quam dui et ex. Nunc consectetur eu risus sed elementum. Praesent pharetra lobortis ligula et maximus. Nam a sapien aliquam, interdum dui ac, faucibus justo. Praesent molestie commodo massa ac ullamcorper. Morbi eget nunc diam. Sed sed euismod nisl. Aliquam bibendum orci at lorem vestibulum, vitae tristique ante ullamcorper. In malesuada semper nulla tincidunt consectetur. Donec pulvinar sapien libero, sit amet suscipit elit sodales eu.'
            },
            {
                title: 'Example Title 2',
                date: 'Publised ' + moment().format("MMMM Do YYYY"),
                content: 'Cras convallis sagittis sapien, et scelerisque turpis porttitor at. Duis ac dignissim justo, in tincidunt augue. Sed est lorem, venenatis vel lacinia in, iaculis at ante. Aliquam ut felis pellentesque, dapibus nibh ac, gravida elit. Etiam convallis massa in eleifend elementum. Vivamus at metus porttitor est interdum interdum nec at neque. Donec vulputate, libero quis eleifend tincidunt, metus velit interdum arcu, ut consectetur quam dui et ex. Nunc consectetur eu risus sed elementum. Praesent pharetra lobortis ligula et maximus. Nam a sapien aliquam, interdum dui ac, faucibus justo. Praesent molestie commodo massa ac ullamcorper. Morbi eget nunc diam. Sed sed euismod nisl. Aliquam bibendum orci at lorem vestibulum, vitae tristique ante ullamcorper. In malesuada semper nulla tincidunt consectetur. Donec pulvinar sapien libero, sit amet suscipit elit sodales eu.'
            },
            {
                title: 'Example Title 3',
                date: 'Publised ' + moment().format("MMMM Do YYYY"),
                content: 'Cras convallis sagittis sapien, et scelerisque turpis porttitor at. Duis ac dignissim justo, in tincidunt augue. Sed est lorem, venenatis vel lacinia in, iaculis at ante. Aliquam ut felis pellentesque, dapibus nibh ac, gravida elit. Etiam convallis massa in eleifend elementum. Vivamus at metus porttitor est interdum interdum nec at neque. Donec vulputate, libero quis eleifend tincidunt, metus velit interdum arcu, ut consectetur quam dui et ex. Nunc consectetur eu risus sed elementum. Praesent pharetra lobortis ligula et maximus. Nam a sapien aliquam, interdum dui ac, faucibus justo. Praesent molestie commodo massa ac ullamcorper. Morbi eget nunc diam. Sed sed euismod nisl. Aliquam bibendum orci at lorem vestibulum, vitae tristique ante ullamcorper. In malesuada semper nulla tincidunt consectetur. Donec pulvinar sapien libero, sit amet suscipit elit sodales eu.'
            },
            {
                title: 'Example Title 4',
                date: 'Publised ' + moment().format("MMMM Do YYYY"),
                content: 'Cras convallis sagittis sapien, et scelerisque turpis porttitor at. Duis ac dignissim justo, in tincidunt augue. Sed est lorem, venenatis vel lacinia in, iaculis at ante. Aliquam ut felis pellentesque, dapibus nibh ac, gravida elit. Etiam convallis massa in eleifend elementum. Vivamus at metus porttitor est interdum interdum nec at neque. Donec vulputate, libero quis eleifend tincidunt, metus velit interdum arcu, ut consectetur quam dui et ex. Nunc consectetur eu risus sed elementum. Praesent pharetra lobortis ligula et maximus. Nam a sapien aliquam, interdum dui ac, faucibus justo. Praesent molestie commodo massa ac ullamcorper. Morbi eget nunc diam. Sed sed euismod nisl. Aliquam bibendum orci at lorem vestibulum, vitae tristique ante ullamcorper. In malesuada semper nulla tincidunt consectetur. Donec pulvinar sapien libero, sit amet suscipit elit sodales eu.'
            },
            {
                title: 'Example Title 5',
                date: 'Publised ' + moment().format("MMMM Do YYYY"),
                content: 'Cras convallis sagittis sapien, et scelerisque turpis porttitor at. Duis ac dignissim justo, in tincidunt augue. Sed est lorem, venenatis vel lacinia in, iaculis at ante. Aliquam ut felis pellentesque, dapibus nibh ac, gravida elit. Etiam convallis massa in eleifend elementum. Vivamus at metus porttitor est interdum interdum nec at neque. Donec vulputate, libero quis eleifend tincidunt, metus velit interdum arcu, ut consectetur quam dui et ex. Nunc consectetur eu risus sed elementum. Praesent pharetra lobortis ligula et maximus. Nam a sapien aliquam, interdum dui ac, faucibus justo. Praesent molestie commodo massa ac ullamcorper. Morbi eget nunc diam. Sed sed euismod nisl. Aliquam bibendum orci at lorem vestibulum, vitae tristique ante ullamcorper. In malesuada semper nulla tincidunt consectetur. Donec pulvinar sapien libero, sit amet suscipit elit sodales eu.'
            },
        ];

        posts.forEach((item, index) => {
            var post =  `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Read more</a>
            </article>
            `;

            jQuery("#posts").append(post);
        });
    }

    //Theme selector
    var theme = $("#theme");

    jQuery("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    jQuery("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    jQuery("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });

    //Scroll
    jQuery(".up").click(function(e){
        e.preventDefault();

       jQuery('html, body').animate({
            scrollTop: 0
       }, 500);

       return false;
    }); 

    //Fake Login

    jQuery("#login form").submit(function(){
         var form_name = $("#form_name").val();

         localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_p  = jQuery("#about p");
        about_p.html("<br><strong>Welcome, "+form_name+" - </strong>");
        about_p.append("<a href='#' id='logout'> Exit</a>");
        jQuery("#login").hide();
    
        jQuery("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //Accordion
    if(window.location.href.indexOf('about') > -1){
        jQuery("#accordion").accordion();
    }

    //Clock
    if(window.location.href.indexOf('clock') > -1){

        setInterval(function(){
            var clock = moment().format("hh:mm:ss");
            $('#clock').html(clock);
        }, 1000);
    }

    //Form Validate
    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        $.validate({
            lang : 'en',
        });
    }
});
