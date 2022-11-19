import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import MiddleHeader from '../components/MiddleHeader';
import {getArticles_mine} from '../api/Article';
import ArticleItem from '../components/ArticleItem';
const MyArticle = () => {
  const [myArticles, setMyArticles] = useState([]);
  const getMyArticles = async () => {
    try {
      await getArticles_mine({userId: 1}, response => {
        // console.log(response.data);
        setMyArticles(response.data);
      });
    } catch (err) {
      console.log('에러났슈', err);
    }
  };
  useEffect(() => {
    getMyArticles();
  }, []);
  console.log('myArticles', myArticles);
  return (
    <>
      <MiddleHeader header="내가 쓴 게시글" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {myArticles.length > 0 ? (
          <>
            {myArticles.map((item, index) => {
              return (
                <ArticleItem
                  key={index}
                  boardId={item.boardId}
                  userId={item.userId}
                  userName={item.userName}
                  region={item.region}
                  boardContent={item.boardContent}
                  boardUpdateDate={item.boardUpdateDate}
                  boardImg={item.boardImg}
                  likeCnt={item.likeCnt}
                  userImg={item.userImg}
                  commentCount={item.commentCnt}
                />
              );
            })}
          </>
        ) : (
          <>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>작성한 게시글이 없습니다.</Text>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default MyArticle;

const Styles = StyleSheet.create({});
