import { useState, useEffect } from "react";
import {Flex, Select, Box, Text, Spinner, Icon, Button} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";


const SearchFilters = () => {
    const [filters, setfilters] = useState(filterData)
    const router = useRouter();

    const searchProperties = (filterValues) => {    
      const path = router.pathname;
       const {query} = router;   
       const values = getFilterValues(filterValues);

       values.forEach((item) => {
        if(item.value && filterValues?.[item.name]) {
          query[item.name] = item.value
        }
       })
       router.push({ pathname: path, query: query });
      }

  return (
    <Flex bg="gray.100"  justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select 
          placeholder={filter.placeholder}
          w ="fit-content"
          p="2"
          onChange={(e) => searchProperties({[filter.queryName]:e.target.value})}>
          {filter?.items?.map((item) => (
            <option value={item.value} key={item.value}>
                 {item.name}
            </option>
          ))}
          </Select>

        </Box>
      ))}

    </Flex>

  )
}

export default SearchFilters