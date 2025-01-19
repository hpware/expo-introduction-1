import { View, Text } from "react-native";
import {useState} from "react";

interface mditem {
    id: number;
    nickname: string;
    content: string;
}
interface mdres {
    id: mditem[];
}
export default async function fetchmarkdown() {
    const [data, setdata] = useState<string | undefined>(undefined)
    const res = await fetch("https://yuanhau.com/api/admin/fetch-markdown-list");
    const resdata = await res.json();
    setdata(resdata);
    return (
        <View>
            <Text>fetch</Text>
            <Text>{data.id[1].content}</Text>
        </View>
    )
}