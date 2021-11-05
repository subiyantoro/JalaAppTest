import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {getListNews} from "../actions/news";
import {connect} from "react-redux";
import NewsItem from "../components/NewsItem";
import MainStyle from "../configs/styles";

const NewsPage = (props) => {
  const {
    listNews,
    loading,
    getListNewsData
  } = props

  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)

  useEffect(() => {
    getListNewsData(limit, page)
  }, [])

  return (
      <View style={MainStyle.container}>
        <Text style={MainStyle.newsTitle}>Kabar Terbaru</Text>
        <NewsItem data={listNews} loading={loading} />
      </View>
  )
}

function mapStateToProps(state){
  return {
    listNews: state.newsStore.data,
    loading: state.newsStore.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getListNewsData: (limit, page) => dispatch(getListNews(limit, page))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)