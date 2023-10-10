'use client';

import {BiSearch} from  'react-icons/bi';


const Search = () => {
    return (
        <div
            className="
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
            
            
            
            "
        
        
        
        
        >
                <div
                    className="
                        flex
                        flex-row
                        items-center
                        justify-between
                    
                    "
                >
            
                    <div
                        className="
                            text-sm
                            font-semibold
                            px-6
                        
                        
                        
                        "
                    
                    
                    >
                        Locations



                    </div>
                    <div
                        className="
                        hidden
                        sm:block
                        text-sm
                        font-semibold
                        px-6
                        border-x-[1px]
                        flex-1
                        text-center
                        
                        "
                    
                    >
                        Availability 

                    </div>
                    <div
                        className="
                            text-sm
                            pl-6
                            pr-2
                            text-gray-600
                            flex
                            flex-row
                            items-center
                            gap-3
                            
                        
                        "
                    >
                        <div className="hidden sm:block">Add Guests </div>
                        <div
                            className="
                            p-2
                            bg-green-400
                            rounded-full
                            text-white
                            "
                        >
                            <BiSearch size={18} />

                        </div>




                    </div>
            </div>   
        </div>


    );
    


}

export default Search

/*

'use client';

const Search = () => {
    return (
        <div
        className="
          border-[1px]
          w-full
          md:w-auto
          py-2
          rounded-full
          shadow-sm
          hover:shadow-md
          transition
          cursor-pointer
        "
        >

          <div
          className="
            flex
            flex-row
            items-center
            justify-between
          
          "
          >
            <div
             className="
               text-sm
               font-semibold
               px-6
             
             
             ">

                tab 1

            </div>

            <div
                className="
                  hidden
                  sm:block
                  text-sm
                  font-semibold
                  px-6
                  border-x-[1px]
                  flex-1
                  text-center
                ">

                    tab 2


            </div>

            <div
            className="
                text-sm
                pl-6
                pr-2
                text-gray-600
                flex
                flex-row
                items-center
                gap-3
            
            
            "
            
            >

            <div className="hidden sm:block">Add Guests </div>

            </div>


          </div>


        </div>
    );
    
      }

      

      export default Search;
      */