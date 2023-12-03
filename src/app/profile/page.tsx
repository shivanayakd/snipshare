import React from 'react'
import Profile from '../components/Profile';

import { fetchSnippets } from '../lib/actions';

type Props = {}

const page = async (props: Props) => {
  const snippets = await fetchSnippets(); // Get tthe Snippets for the profile
  
  return <Profile snippets={snippets} />;
}

export default page