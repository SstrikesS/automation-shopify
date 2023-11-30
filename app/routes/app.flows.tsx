import {Button, Card, Icon, Text} from '@shopify/polaris';
import {CircleTickMajor, } from '@shopify/polaris-icons';
import  {useEffect, useState} from "react";

const Flows=()=> {
  const items = [
    {
      name: 'Flow name 1',
      time: 'November 8, 2023'
    },
    {
      name: 'Flow name 2',
      time: 'November 8, 2023'
    },
    {
      name: 'Flow name 3',
      time: 'November 8, 2023'
    }, {
      name: 'Flow name 4',
      time: 'November 8, 2023'
    }, {
      name: 'Flow name 5',
      time: 'November 8, 2023'
    },
  ]

  const [recentlyViewedPressed, setRecentlyViewedPressed] = useState(false);
  const [lastModifiedPressed, setLastModifiedPressed] = useState(false);
  const [aToZPressed, setAToZPressed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedButton, setSelectedButton] = useState<number | null>(null);


  useEffect(() => {
    const totalPagesCount = Math.ceil(items.length / 3);
    setTotalPages(totalPagesCount);
  }, [items.length]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectedButton(pageNumber);

  };

  const indexOfLastItem = currentPage * 3;
  const indexOfFirstItem = indexOfLastItem - 3;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleButtonPress = (buttonType: string)  => {
    switch (buttonType) {
      case 'recentlyViewed':
        setRecentlyViewedPressed((prev) => !prev); // Toggle the pressed state
        setLastModifiedPressed(false);
        setAToZPressed(false);
        break;
      case 'lastModified':
        setRecentlyViewedPressed(false);
        setLastModifiedPressed((prev) => !prev); // Toggle the pressed state
        setAToZPressed(false);
        break;
      case 'aToZ':
        setRecentlyViewedPressed(false);
        setLastModifiedPressed(false);
        setAToZPressed((prev) => !prev); // Toggle the pressed state
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          maxWidth: 1200,
          paddingLeft: '3vw',
          paddingRight: '3vw',
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: '23px',


        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%', // Fill the available width

          }}
        >
          <b>Flows</b>
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginRight: '13vx'}}>
          <div style={{width: '140px', marginRight: '10px'}}>
            <Button
              fullWidth
              pressed={recentlyViewedPressed}
              onClick={() => handleButtonPress('recentlyViewed')}
            >
              Recently viewed
            </Button>
          </div>
          <div style={{width: '120px', marginRight: '10px'}}>
            <Button
              fullWidth
              pressed={lastModifiedPressed}
              onClick={() => handleButtonPress('lastModified')}
            >
              Last modified
            </Button>
          </div>
          <div style={{width: '120px', marginRight: '10px'}}>
            <Button
              fullWidth
              pressed={aToZPressed}
              onClick={() => handleButtonPress('aToZ')}
            >
              A - Z
            </Button>
          </div>
        </div>

      </div>
      <div
        style={{
          marginTop: '10px',
          maxWidth: 1200,
          paddingLeft: '5vw',
          paddingRight: '5vw',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: '23px',
        }}
      >
        {currentItems.map((item, index) => (
          <div style={{marginBottom: '10px'}}
               key={index}
          >
            <Card>
              <div
                style={{

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                  <img
                    src={
                      'https://th.bing.com/th?id=OIP.9U6ZvbMYvlmVJ7RwuBaajAHaLJ&w=203&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
                    }
                    alt="Activity"
                    style={{
                      width: '130px',
                      height: '80px',
                      marginRight: '20px',
                      marginLeft: '20px',
                    }}
                  />
                  <div style={{textAlign: 'left'}}>
                    <div>
                      <div style={{alignItems: 'center'}}>
                        <div style={{flex: 1, textAlign: 'left'}}>
                          <b>
                            <span style={{display: 'flex', alignItems: 'center'}}>
                              {item.name}
                              <Icon
                                source={CircleTickMajor}
                              />
                            </span>
                          </b>
                          <div style={{marginTop: '10px'}}>
                            <Text as="h2" variant="bodyMd">
                              Created at: {item.time}
                            </Text>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div style={{marginTop: '10px', width: '100px'}}>
                    <Button fullWidth variant="primary" tone="success">Edit</Button>
                  </div>
                  <div style={{marginTop: '10px', width: '100%'}}>
                    <Button variant="primary" fullWidth tone="critical">
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
        <Card>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                marginRight: '5px',
                border: selectedButton === currentPage - 1 ? '1px solid blue' : '1px solid transparent',

              }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                style={{
                  marginRight: '5px',
                  border: selectedButton === index + 1 ? '1px solid blue' : '1px solid transparent',
                  color: selectedButton === currentPage + 1 ? 'blue' : 'initial',

                }}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                marginLeft: '5px',
                border: selectedButton === currentPage + 1 ? '1px solid blue' : '1px solid transparent',

              }}
            >
              Next
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Flows;
