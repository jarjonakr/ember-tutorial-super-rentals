import Route from '@ember/routing/route';

export default Route.extend({

    //before model loads, replace empty index with rentals
    beforeModel() {

        //The replaceWith function is similar to the route's transitionTo() function, 
        // the difference being that replaceWith will replace the current URL in the browser's 
        // history, while transitionTo will add to the history. Since we want our rentals route to 
        // serve as our home page, we will use the replaceWith function. Now visiting the 
        // root route at / will result in the /rentals URL loading.
        this.replaceWith('rentals')
        
    },
    
});
