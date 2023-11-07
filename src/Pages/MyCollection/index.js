import {
  Flex,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Text,
  Box,
  IconButton,
  Button,
  ChakraProvider,
} from "@chakra-ui/react";
import MusicCardItem from "@/components/MusicCard";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "@/Provider";

function MyCollection() {
  const [listPlayList, setListPlayList] = useState([]);
  const [listChord, setListChord] = useState([]);
  const navigator = useNavigate();
  const { BACK_END_PORT } = useContext(GlobalContext);
  const handlePlayListSongDetail = (userName) => {
    navigator(`/my-playlist-song/${userName}`);
  };

  const handlePlayListChordDetail = (id) => {
    navigator(`/my-playlist-chord/${id}`);
  };
  //pagination list song
  const maxItems = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [nextPage, setNextPage] = useState(false);
  const [previosPage, setPreviosPage] = useState(false);
  const [dynamicPlaylist, setDynamicPlaylist] = useState([]);

  const getPaginationListOfMyPlaylistSong = (status, list) => {
    let value = 0;
    if (status === "increase") {
      value = currentPage + 1;
    } else if (value === "decrease") {
      value = currentPage - 1;
    } else {
      setNextPage(list.length < maxItems ? false : true);
      setPreviosPage(false);
    }
    setCurrentPage(value);
    let newMyPlayListSong = [];
    for (let i = value * maxItems; i < (value + 1) * maxItems; i++) {
      if (list[i]) {
        newMyPlayListSong.push(list[i]);
      }
      if (status === "increase") {
        setNextPage(i >= list.length - 1 ? false : true);
        setPreviosPage(true);
      }
      if (status === "decrease") {
        setPreviosPage(currentPage === 0 ? false : true);
        setNextPage(true);
      }
    }
    setDynamicPlaylist(newMyPlayListSong);
  };

  //pagination list chord
  const [currentPage2, setCurrentPage2] = useState(0);
  const [nextPage2, setNextPage2] = useState(false);
  const [previosPage2, setPreviosPage2] = useState(false);
  const [dynamicPlaylist2, setDynamicPlaylist2] = useState([]);

  const getPaginationListOfMyPlaylistChords = (status, list) => {
    let value = 0;
    if (status === "increase") {
      value = currentPage + 1;
    } else if (value === "decrease") {
      value = currentPage - 1;
    } else {
      setNextPage2(list.length <= maxItems ? false : true);
      setPreviosPage2(false);
    }
    setCurrentPage2(value);
    let newMyPlayListSong = [];
    for (let i = value * maxItems; i < (value + 1) * maxItems; i++) {
      if (list[i]) {
        newMyPlayListSong.push(list[i]);
      }
      if (status === "increase") {
        setNextPage2(i >= list.length - 1 ? false : true);
        setPreviosPage2(true);
      }
      if (status === "decrease") {
        setPreviosPage2(currentPage === 0 ? false : true);
        setNextPage2(true);
      }
    }
    setDynamicPlaylist2(newMyPlayListSong);
  };

  useEffect(() => {
    const id = 3;

    const fetchData = async () => {
      try {
        const [getPlayList, getListChords] = await Promise.all([
          axios.get(`${BACK_END_PORT}/api/v1/playlist/user/${id}`),
          axios.get(`${BACK_END_PORT}/api/v1/chordcollection/user/${id}`),
        ]);

        if (getPlayList) {
          setListPlayList(getPlayList.data);
          getPaginationListOfMyPlaylistSong(null, getPlayList.data);
        }

        if (getListChords) {
          setListChord(getListChords.data);
          getPaginationListOfMyPlaylistChords(null, getListChords.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [BACK_END_PORT]);
  const ListMyPLaylistHTML = dynamicPlaylist?.map((item, index) => (
    <MusicCardItem
      key={index}
      image={item?.image}
      content={item?.description}
      name={item?.name}
      showNumberSong={true}
      numberSongs={item?.quantityOfSong}
      minW="250px"
      h="380px"
      color={"black"}
      cursor="pointer"
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      mr={listPlayList.length !== 5 ? "4%" : "0"}
      alignItems={"flex-start"}
      onClick={() => handlePlayListSongDetail(item?.name)}
    />
  ));
  const ListMyChordHTML = listChord?.map((item, index) => (
    <MusicCardItem
      key={index}
      image={item?.image}
      content={item?.description}
      name={item?.name}
      w="250px"
      h="380px"
      color={"black"}
      mr={listChord.length !== 5 ? "4%" : "0"}
      alignItems={"flex-start"}
      cursor="pointer"
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      onClick={() => handlePlayListChordDetail(item?.id)}
    />
  ));
  return (
    <div style={{ marginTop: -100 }}>
      <Stack w={"80%"} m={"auto auto"} spacing={8}>
        <Card style={{ marginTop: 140 }}>
          <CardHeader display={"flex"} justifyContent={"space-between"} style={{ paddingTop: 12.5 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: 20 }}>
              <Text fontWeight={"700"} fontSize={"2.2rem"}>
                My Chord Collection
              </Text>
              <Button fontWeight={"700"} fontSize={"1.5rem"} style={{ background: '#EDF2F7', padding: 5, width: 40, height: 30, textWrap: 'nowrap', fontSize: '2rem' }} variant="outlined"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill="black" />
              </svg></a></Button>
            </div>
            <Flex alignItems={"center"}>
              <IconButton
                fontSize={"24px"}
                bgColor={"white"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                }
                isDisabled={!previosPage2}
                onClick={() =>
                  getPaginationListOfMyPlaylistChords("decrease", listPlayList)
                }
              >
                <ChevronLeftIcon />
              </IconButton>
              <Box w={"10px"}></Box>
              <IconButton
                fontSize={"24px"}
                bgColor={"white"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                }
                isDisabled={!nextPage2}
                onClick={() =>
                  getPaginationListOfMyPlaylistChords("increase", listPlayList)
                }
              >
                <ChevronRightIcon />
              </IconButton>
            </Flex>
          </CardHeader>
          <Divider />
          <CardBody>
            <Flex
              justifyContent={
                listChord?.length === 5 ? "space-between" : "flex-start"
              }
            >
              {ListMyChordHTML}
            </Flex>
          </CardBody >
        </Card>
        <Card>
          <CardHeader display={"flex"} justifyContent={"space-between"}>
            <Text fontWeight={"700"} fontSize={"2.2rem"}>
              My Song Collection
            </Text>
            <Flex alignItems={"center"}>
              <IconButton
                fontSize={"24px"}
                bgColor={"white"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                }
                onClick={() =>
                  getPaginationListOfMyPlaylistSong("decrease", listPlayList)
                }
                isDisabled={!previosPage}
              >
                <ChevronLeftIcon />
              </IconButton>
              <Box w={"10px"}></Box>
              <IconButton
                fontSize={"24px"}
                bgColor={"white"}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
                boxShadow={
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                }
                onClick={() =>
                  getPaginationListOfMyPlaylistSong("increase", listPlayList)
                }
                isDisabled={!nextPage}
              >
                <ChevronRightIcon />
              </IconButton>
            </Flex>
          </CardHeader>
          <Divider />
          <CardBody>
            <Flex
              justifyContent={
                listPlayList?.length === 5 ? "space-between" : "flex-start"
              }
            >
              {ListMyPLaylistHTML}
            </Flex>
          </CardBody>
        </Card>
        <Flex></Flex>
      </Stack>
    </div>
  );
}

export default MyCollection;
