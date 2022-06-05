import React, { useState, useEffect, createElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button, Menu, Avatar } from "antd";
import { Paths } from "../../utils/dummyData";


const data = Paths;




const loadPath = async () => {
  const { data } = await axios.get(`/api/Paths/${slug}`);
  console.log(data);
  if (data) setValues(Paths);
};

useEffect(() => {
  if (slug) loadPath();
}, [slug]);
