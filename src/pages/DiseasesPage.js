import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {getDiseasesList} from "../actions/diseases";
import {connect} from "react-redux";
import DiseasesItem from "../components/DiseasesItem";
import MainStyle from "../configs/styles";
import NewsItem from "../components/NewsItem";

const DiseasesPage = (props) => {
    const {
        listDiseases,
        loading,
        getListDiseases
    } = props

    const [limit, setLimit] = useState(15)
    const [page, setPage] = useState(1)

    useEffect(() => {
        getListDiseases(limit, page)
    }, [])

    return (
        <View style={MainStyle.container}>
            <Text style={MainStyle.newsTitle}>Daftar Penyakit</Text>
            <DiseasesItem data={listDiseases} loading={loading} />
        </View>
    )
}

function mapStateToProps(state) {
    return {
        listDiseases: state.diseasesStore.data,
        loading: state.diseasesStore.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getListDiseases: (limit, page) => dispatch(getDiseasesList(limit, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiseasesPage)