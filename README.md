# Namaste React

# Parcel
- dev builder
- local server
- hmr : hot module replacement 
- file watching algorithm : written in c++
- catching :faster building
- bundling
- compress
- consistent hashing
- differential bundling
- image optimization
- manification
- tree shaking:  remove unused code


/*Funcional Components

   >Header
        >logo
        >Home
        >about
        >cart
    >Body
        >Search
        >res-container
           >Card  
                >RestrauName
                >Cousines : paneer, roti , burger
                >Rating
                >Voting  
    >Footer
        >links
        >capiton       
 */


# zomato api URL
   > https://www.zomato.com/webroutes/getPage?page_url=/kanpur/great-cafes&location=&isMobile=0


 Two Types of IMPORT/ EXPORT

 default:
    >  export:   export default Component;
       import:   import Component from "path";

 named :
    >  export:   export const Component;
       import:   import {Component} from "path"; 

            
# React HOOKS
(Normal JS utility function)    

two main:
   > useState() 
   > useEffect()


# Two types of Routing
   >Client Side Routing :  all components already present does not make any network call for components or pages
      >Single page application: only components getting interchanged via client side routing
       
   >Server Side Routing :  pages coming from server