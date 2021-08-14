import React ,{ Component }  from 'react' ;

import { View } from 'react-native';
import { VStack, Box, Divider,Image } from 'native-base';


class ItemsCard extends Component {

    render(){
        
    const {data} = this.props;
        
    return (
       <> 
        {
         data.map(item=>(   

            <Box  borderRadius='md'>
             <VStack space={1} divider={<Divider />}>
             
                <Box px={4}>
                <Text>{item.itemName}</Text> 
                    {item.description}
                </Box>
      
                <Box px={4} pb={15}>
                     {item.price}
                </Box>

                <Box px={4} pb={15}>
                    {items.authorFirstName} 
                </Box>
             </VStack>
            </Box>
    ))
    }
       
  
       
        
   </> 
         
    );
    }      
}


export default ItemsCard;