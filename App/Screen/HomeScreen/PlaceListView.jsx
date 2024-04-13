import { View, Text, FlatList,Dimensions} from 'react-native'
import React, { useRef,useEffect,useContext,useState} from 'react'
import PlaceItem from './PlaceItem'
import { selectMarkerContext } from '../../Context/SelectMarkerContext';
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import {app} from '../../Utils/Firebaseconfig';
import {useUser} from '@clerk/clerk-expo'

export default function PlaceListView({placeList}) {
  const flatListRef=useRef(null);
  const {selectedMarker,setSelectedMarker}=useContext(selectMarkerContext)
  const {user}=useUser();
  const[favList,setFavList]=useState([]);
  useEffect(() => {
    if (placeList &&  placeList.length>0 && selectedMarker) {
      selectedMarker&&scrollToIndex(selectedMarker);
    }
  }, [selectedMarker, placeList]);


const scrollToIndex=(index)=>{
  flatListRef.current?.scrollToIndex({animated:true,index})
}

  const getItemLayout=(_,index)=>({
    length:Dimensions.get('window').width,
    offset:Dimensions.get('window').width*index,
    index
  })


  const db = getFirestore(app);
  useEffect(()=>{
    user&&getFav();
  },[user]);

  const getFav=async()=>
  {
    
    setFavList([])
    if (!user || !user.primaryEmailAddress || !user.primaryEmailAddress.emailAddress) {
      return;
    }
      const q = query(collection(db, "ev-fav-place"), where("email", "==", user?.primaryEmailAddress?.emailAddress));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setFavList(favList=>[...favList,doc.data()])
});
  }

  const isFav=(place)=>{
    const result=favList.find((item)=>item?.Place?.id==place.id)
    console.log("res =" + JSON.stringify(result))
    return result?true:false;
  }



  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        pagingEnabled
        ref={flatListRef}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View key={index}>
                <PlaceItem place={item}
                isFav={isFav(item)}
                markedFav={()=>getFav()}
                />
            </View>

        )}
      />
    </View>
  )
}