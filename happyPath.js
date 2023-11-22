const str = `// This is a dummy function that just returns true
const
 
save
 
=
 
async
 
(
userId
:
 string
,
 post
:
 string
)
 
=>
 
true
;
// Save a post, and return true for success, and false for failure
async
 
function
 
savePost
(
  
userId
:
 string
,
  post
:
 string
,
  group
:
 string
)
:
 
Promise
<
boolean
>
 
{
  
if
 
(
group 
!==
 
""
)
 
{
    
if
 
(
group 
===
 
"author"
)
 
{
      
if
 
(
post
.
length
 
>
 
1000
)
 
{
        
return
 
await
 
save
(
userId
,
 post
)
;
      
}
 
else
 
{
        
return
 
false
;
      
}
    
}
    
if
 
(
group 
===
 
"admin"
)
 
{
      
if
 
(
post
.
length
 
>
 
100
)
 
{
        
return
 
await
 
save
(
userId
,
 post
)
;
      
}
 
else
 
{
        
return
 
false
;
      
}
    
}
    
if
 
(
post
.
length
 
>
 
2000
)
 
{
      
return
 
await
 
save
(
userId
,
 post
)
;
    
}
  
}
 
else
 
{
    
return
 
false
;
  
}
}`

console.log(str.replace('\n', ''))
