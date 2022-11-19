import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  DeviceEventEmitter,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CommentList from '../components/CommentList';
import Modal from 'react-native-modal';
import {getArticles_From_BoardId} from '../api/Article';
import {
  getAllCommentFromArticle,
  PostComment,
  deleteComment,
} from '../api/Comment';
import {Pressable} from 'react-native';

const ArticleItem = Props => {
  console.log('Props', Props.route.params.boardId);
  const userNickName = 'aJumoney__';
  const region = '서울특별시 강남구 역삼동';
  const windowWidth = Dimensions.get('window').width;
  const like = 200;
  const comment = 5;
  const [inputComment, setInputComment] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [test, setTest] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const backdropOpacity = 0.3;
  const [boardIdData, setBoardIdData] = useState([]);
  const [commentAll, setCommentAll] = useState([]);
  const [emitter, setEmitter] = useState([]);
  const getBoardIdData = async () => {
    try {
      await getArticles_From_BoardId(
        {boardId: Props.route.params.boardId},
        response => {
          //   console.log(response.data);
          setBoardIdData(response.data);
        },
      );
    } catch (err) {
      console.log('심각한 에러', err);
    }
  };

  const getAllComment = async () => {
    try {
      await getAllCommentFromArticle(
        {boardId: Props.route.params.boardId},
        response => {
          // console.log('댓글들', response.data);
          setCommentAll(response.data);
        },
      );
    } catch (err) {
      console.log('에러났유', err);
    }
  };

  const PostCommentFunc = async () => {
    try {
      await PostComment(
        {boardId: Props.route.params.boardId, content: inputComment, userId: 1},

        response => {
          console.log('댓글 등록 성공', response);
          setInputComment('');
          setTest(prev => !prev);
        },
      );
    } catch (err) {
      console.log('실패했슈', err);
    }
  };

  useEffect(() => {
    getBoardIdData();
  }, []);
  useEffect(() => {
    getAllComment();
  }, [test]);

  useEffect(() => {
    DeviceEventEmitter.addListener('commentDelete', event => {
      setEmitter(event.key);
      getAllComment();
    });
  }, [emitter]);

  return (
    <>
      {boardIdData.length > 0 ? (
        <>
          <Text>없습니다.</Text>
        </>
      ) : (
        <>
          <ScrollView style={Styles.ArticleContainer}>
            {/* Header Start */}
            <View>
              <View style={Styles.ArticleHeader}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: boardIdData.userImg}}
                    resizeMode="contain"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                    }}
                  />
                  <View style={{marginLeft: 5}}>
                    <Text style={Styles.Nickname}>{boardIdData.userName}</Text>
                    <Text style={Styles.region}>{boardIdData.region}</Text>
                  </View>
                </View>
                <TouchableWithoutFeedback onPress={toggleModal}>
                  <Image
                    source={require('../assets/icons/Group.png')}
                    resizeMode="contain"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </TouchableWithoutFeedback>
                <Modal
                  isVisible={isModalVisible}
                  onBackdropPress={toggleModal}
                  backdropOpacity={backdropOpacity}>
                  <View style={Styles.threeModal}>
                    <TouchableOpacity>
                      <View style={Styles.ModalMenu}>
                        <Text style={Styles.ModalMenuText}>삭제</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View style={Styles.ModalMenu}>
                        <Text style={Styles.ModalMenuText}>취소</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </View>
              {/* Header End */}
              {/* Image Start*/}
              <ScrollView
                contentContainerStyle={Styles.ImageContainer}
                pagingEnabled={true}
                horizontal={true}>
                {/* {console.log('board이미지', boardIdData.boardImg)} */}
                {boardIdData.boardImg !== undefined ? (
                  <>
                    {boardIdData.boardImg.map((Img, index) => {
                      return (
                        <Image
                          key={index}
                          source={{uri: Img}}
                          resizeMode="cover"
                          style={{
                            width: windowWidth,
                            height: 400,
                          }}
                        />
                      );
                    })}
                  </>
                ) : null}
              </ScrollView>
              {/* Image End */}
              <View style={Styles.likeAndComment}>
                <Image
                  source={require('../assets/icons/message.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
              <View style={Styles.Contents}>
                <Text
                  style={{
                    color: '#282828',
                    fontSize: 16,
                    lineHeight: 21,
                    textAlign: 'left',
                    marginBottom: 15,
                  }}>
                  {boardIdData.boardContent}
                </Text>
                <Text style={{color: '#959595'}}>
                  댓글 {commentAll.commentCount}개 모두 보기
                </Text>
                <Text style={{color: '#959595', marginTop: 5}}>
                  {boardIdData.boardUpdateDate}
                </Text>
              </View>
            </View>
            <View style={{...Styles.CommentBox}}>
              {commentAll.commentList !== undefined ? (
                <>
                  {commentAll.commentList.map(comment => {
                    return (
                      <CommentList
                        key={comment.boardCommentId}
                        userNickName={comment.userNickname}
                        region={comment.userAddress}
                        addTime={comment.createDate}
                        img={comment.userImg}
                        content={comment.content}
                        boardCommentId={comment.boardCommentId}
                      />
                    );
                  })}
                </>
              ) : (
                <View>
                  <Text style={{textAlign: 'center'}}>댓글이 없습니다.</Text>
                </View>
              )}

              {/* <CommentList />
              <CommentList />
              <CommentList />
              <CommentList />
              <CommentList />
              <CommentList />
              <CommentList />
              <CommentList />
              <CommentList />
              <CommentList />
              <CommentList /> */}
            </View>
          </ScrollView>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              onChangeText={e => setInputComment(e)}
              style={Styles.Input}
              placeholder="댓글을 입력해주세요"
              value={inputComment}
              placeholderTextColor="#959595"
            />
            <Pressable
              style={{position: 'absolute', right: 20}}
              onPress={() => {
                PostCommentFunc();
              }}>
              <Image
                source={require('../assets/icons/send.png')}
                resizeMode="contain"
              />
            </Pressable>
          </View>
        </>
      )}
    </>
  );
};

export default ArticleItem;

const Styles = StyleSheet.create({
  ArticleContainer: {
    marginVertical: 5,
    backgroundColor: '#fff',
    // paddingHorizontal: 30,
    paddingTop: 7,
    paddingBottom: 10,
    flex: 1,
  },
  ArticleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  Nickname: {
    color: '#282828',
    fontSize: 18,
    fontWeight: '600',
  },
  region: {
    color: '#959595',
    fontSize: 12,
  },
  ImageContainer: {
    marginTop: 7,
  },
  likeAndComment: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    marginTop: 7,
  },
  Contents: {
    marginTop: 5,
    paddingHorizontal: 30,
  },
  CommentBox: {
    marginVertical: 15,
  },
  Input: {
    color: '#282828',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  threeModal: {
    marginTop: 'auto',
    marginBottom: -20,
    marginHorizontal: -20,
    flex: 0.2,
    backgroundColor: '#fff',
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-evenly',
  },
  ModalMenuText: {
    color: '#282828',
  },
  ModalMenu: {
    paddingVertical: 5,
  },
  ModalMenuText: {
    color: '#282828',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
