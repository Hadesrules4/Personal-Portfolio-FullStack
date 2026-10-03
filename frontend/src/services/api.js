const API=import.meta.env.VITE_API_URL||'http://localhost:5000/api';
async function request(path,options={}){const r=await fetch(API+path,{headers:{'Content-Type':'application/json',...(options.token?{Authorization:`Bearer ${options.token}`}:{})},...options});const data=await r.json().catch(()=>({}));if(!r.ok)throw new Error(data.message||'Request failed');return data}
export const getProjects=()=>request('/projects');
export const getSkills=()=>request('/skills');
export const sendMessage=(body)=>request('/messages',{method:'POST',body:JSON.stringify(body)});
export const login=(body)=>request('/auth/login',{method:'POST',body:JSON.stringify(body)});
export const getMessages=(token)=>request('/messages',{token});
export const createProject=(body,token)=>request('/projects',{method:'POST',body:JSON.stringify(body),token});
export const deleteProject=(id,token)=>request('/projects/'+id,{method:'DELETE',token});
