import {
    Box,
    Flex,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  function TabChordList({ chords, setTabSelected,  ...props }) {
    return (
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList fontSize={'1.5rem'}>
              <Tab onClick={()=>setTabSelected("Guitar")} fontSize={'1.5rem'}>Guitar</Tab>
              <Tab onClick={()=>setTabSelected("Ukulele")}  fontSize={'1.5rem'}>Ukulele</Tab>
              <Tab onClick={()=>setTabSelected("Piano")} fontSize={'1.5rem'}>Piano</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex flexWrap={'wrap'} justifyContent={'space-between'} mt={5}>
                  {chords
                    ?.filter((item) => item?.type === 'Guitar')
                    ?.map((item) => (
                      <Stack
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        mb={3}
                        w={"30%"}
                      >
                        <Box>
                          <Image src={item?.image} h={"320px"}/>
                        </Box>
                        <Box>
                          <Text fontWeight={'600'} fontSize={'2rem'}>
                            {item?.chordName}
                          </Text>
                        </Box>
                      </Stack>
                    ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexWrap={'wrap'} justifyContent={'space-between'} mt={5}>
                  {chords
                    ?.filter((item) => item?.type === 'Ukulele')
                    ?.map((item) => (
                        <Stack
                        alignItems={'center'}
                        justifyContent={'flex-start'}
                        mb={2}
                        w={"30%"}
                      >
                        <Box>
                          <Image src={item?.image} h={"240px"}/>
                        </Box>
                        <Box>
                          <Text fontWeight={'600'} fontSize={'2rem'}>
                            {item?.chordName}
                          </Text>
                        </Box>
                      </Stack>
                    ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex flexWrap={'wrap'} justifyContent={'space-between'} mt={5}>
                  {chords
                    ?.filter((item) => item?.type === 'Piano')
                    ?.map((item) => (
                      <Stack alignItems={'center'} justifyContent={'flex-start'}  w={"30%"}>
                        <Box>
                          <Image src={item?.image} h={"160px"}/>
                        </Box>
                        <Box>
                          <Text fontWeight={'600'} fontSize={'2rem'}>
                            {item?.chordName}
                          </Text>
                        </Box>
                      </Stack>
                    ))}
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
     
    );
  }
  
  export default TabChordList;
  