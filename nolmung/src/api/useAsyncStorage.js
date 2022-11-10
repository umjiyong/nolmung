import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = () => {
    const [data, setData] = useState(
        {accessToken: '', id: ''});

    AsyncStorage.getItem('accessToken', (err, res) => {
        setData({...data, accessToken: res});
    })
    AsyncStorage.getItem('id', (err, res) => {
        setData({...data, id: res});
    })

    return data.accessToken;
}

export default useAsyncStorage;