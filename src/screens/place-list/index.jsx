import { useDispatch, useSelector } from "react-redux";

import { FlatList } from "react-native";
import { PlaceItem } from "../../components";
import { getPlaces } from "../../store-toolkit/place.slice";
import { styles } from "./styles";
import { useEffect } from "react";

const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);

  const onHandlerSelect = (id) => {
    navigation.navigate("PlaceDetail", { placeId: id });
  };

  console.warn("places", places);

  useEffect(() => {
    dispatch(getPlaces());
  }, [dispatch]);

  const renderItem = ({ item }) => <PlaceItem {...item} onSelect={onHandlerSelect} />;
  const keyExtractor = (item) => item.id;
  return (
    <FlatList
      data={places}
      style={styles.container}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default PlaceList;
