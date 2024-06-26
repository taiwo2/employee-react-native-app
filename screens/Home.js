import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert} from 'react-native';
import {Card,FAB} from 'react-native-paper'
// import {useSelector,useDispatch} from 'react-redux'

const Home = ({navigation,route})=>{

    //  const [data,setData] = useState([])
    //  const [loading,setLoading]= useState(true)
    // const dispatch  = useDispatch()
    // const {data,loading} =  useSelector((state)=>{
    //     return state
    // })

    // console.log(data,loading)
   
    //  const fetchData = ()=>{
    //     fetch("http://10.0.2.2:3000/")
    //     .then(res=>res.json())
    //     .then(results=>{
    
    //         // setData(results)
    //         // setLoading(false)
    //       dispatch({type:"ADD_DATA",payload:results})
    //       dispatch({type:"SET_LOADING",payload:false})

    //     }).catch(err=>{
    //         Alert.alert("someting went wrong")
    //     })
    //  }
    
    //  useEffect(()=>{
    //       fetchData()
    //  },[])
    const data = [
      {_id:1, name: "Taiwo",position: "web dev", email:"tehst@gma.com",salary:"£5055",phone:'07035644', picture: "https://plus.unsplash.com/premium_photo-1679079455735-723926fdf229?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      {_id:2, name: "fatimat",position: "android dev", email:"tehst@gma.com",salary:"£5055",phone:'07035644', picture: "https://plus.unsplash.com/premium_photo-1679079455735-723926fdf229?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      {_id:3, name: "kehinde",position: "data analyst", email:"tehst@gma.com",salary:"£5055",phone:'07035644', picture: "https://plus.unsplash.com/premium_photo-1679079455735-723926fdf229?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
      {_id:4, name: "Fatiah",position: "mobile dev", email:"tehst@gma.com",salary:"£5055",phone:'07035644', picture: "https://plus.unsplash.com/premium_photo-1679079455735-723926fdf229?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    ]
    
    const renderList = ((item)=>{
          return(
            <Card style={styles.mycard}
            
            onPress={()=>navigation.navigate("Profile",{item})}
            >
            <View style={styles.cardView}>
                 <Image
                style={{width:60,height:60,borderRadius:30}}
                source={{uri:item.picture}}
                
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.name}</Text>   
                     <Text style={styles.text}>{item.position}</Text>      
                </View>
           
            </View>
            
           </Card>
          )
    })
   return(
       <View style={{flex:1}}>
    
        <FlatList
              data={data}
              renderItem={({item})=>{
                return renderList(item)
              }}
              keyExtractor={item=>item._id}
              // onRefresh={()=>fetchData()}
              // refreshing={loading}
              />
        

            <FAB  onPress={()=>navigation.navigate("Create")}
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    theme={{colors:{accent:"#006aff"}}}
        
                />
          
       </View>
     
   ) 
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
       
    },
    cardView:{
         flexDirection:"row",
         padding:6
    },
    text:{
        fontSize:18,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})

export default Home;