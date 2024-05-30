"use client"
import { FC, useState } from 'react'
import Preview from './Preview'
import AddLinks from './AddLinks'
import { Link, User } from '@prisma/client'
import { addLinkToServer,deleteLinkToServer, updateLinkToServer } from '../actions'

interface LinksProps {
  fetchedLinks:Link[]
  user:User
}

const Links: FC<LinksProps> = ({fetchedLinks,user}) => {
    const [isMobilePreview, setIsMobilePreview] = useState<boolean>(false);
    const [links, setLinks] = useState<Link[]>(fetchedLinks);

    const addLink=async(name:string,url:string,description:string)=>{
      const res=await addLinkToServer(name,url,description);
      if(res)
        {
          setLinks((links)=>{
            return [...links,res]
          })
        }
    }

    const deleteLink=async(id:number)=>{
      const res=await deleteLinkToServer(id);
      if(res)
      {
        const updatedLinks = links.filter(link => link.id !== id);
        setLinks(updatedLinks);
      }
    }

    const updateLink=async(id:number,name:string,url:string,description:string)=>{
      const res=await updateLinkToServer(id,name,url,description);
      if(res){
        setLinks(prevLinks => 
          prevLinks.map(link => 
            link.id === id ? res : link
          )
        );
      }
    }

    return (
      <div className="relative w-full md:flex md:justify-between">
        <AddLinks 
        setIsMobilePreview={setIsMobilePreview} 
        links={links}
        addLink={addLink}
        deleteLink={deleteLink}
        updateLink={updateLink}
        />
        <Preview isMobilePreview={isMobilePreview} setIsMobilePreview={setIsMobilePreview} links={links} user={user}/>
      </div>
    );
  };
  
  export default Links;