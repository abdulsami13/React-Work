import { PieChart } from 'react-minimal-pie-chart';

export default function ShowResult(){


    return(
        <div>

<div style={{ display: "flex" ,width:"100%" ,height:60 ,justifyContent:"space-between",marginTop:10 ,borderBottomStyle:"solid",borderBottomColor:"gray"}}>

<div style={{height:60}}>
    <img src="https://quiz.saylaniwelfare.com/images/smit.png" alt=""  style={{objectFit: 'cover',width:100,marginLeft:30}}/>
</div>
<div style={{display:"flex",alignContent:"center",alignItems:"center" ,borderWidth:1,borderStyle:"solid",borderColor:"gray",height:40,borderRadius:10}}>

    <input type="text" style={{width:300,margin:0 , border:"none"}} placeholder="Search.."/>
    <button style={{width:60,height:42,borderLeft:10}}>
        search
    </button>
</div>


<div style={{width:50,height:50,background:"#003583", borderRadius:40,textAlign:"center",marginRight:40}}>
    <p style={{color:"white"}}>A</p>
</div>
</div>



<div style={{display:"flex",justifyContent:"space-between",paddingLeft:40,paddingRight:40,paddingTop:30,backgroundColor:"#dcefed"}}>

<div>

    <h1 style={{fontSize:29}}>
        Name: Layba
    </h1>
    <p style={{fontSize:18,color:"blue",display:"flex" ,alignItems:"center",}}>Test perform :<p style={{color:"black",marginLeft:10}}>3</p></p>
    <p style={{fontSize:22}}>
        Mark: GOOD
    </p>
</div>

<PieChart
  data={[
      { title: 'One', value: 10, color: '#01a185' },
      { title: 'Two', value: 15, color: '#3cc9af' },
      { title: 'Three', value: 20, color: '#ace4d9' },
    ]}
    label={(labelRenderProps) =>
        labelRenderProps.dataEntry.percentage.toFixed(1) 
        //    console.log(labelRenderProps)
    }  
  style={{width:200}}
/>

    </div>
 
 <div style={{
    border: '1px solid black'
 }}> 

 </div>

<div style={{display:"flex",alignItems:"center",marginLeft:44}}>

 <p style={{fontSize:22,fontWeight:"bold",marginRight:40}}>Quize 1: Javascript </p>
 <div style={{width:"60%",border:'solid lightblue 1',height:10,backgroundColor:"lightblue",borderRadius:23}}>
<div style={{width:"80%",height:10,backgroundColor:"blue"}}>

</div>
</div>
<div>

</div>
 </div>


 <div style={{display:"flex",alignItems:"center",marginLeft:44}}>

 <p style={{fontSize:22,fontWeight:"bold",marginRight:40}}>Quize 2: Javascript </p>
 <div style={{width:"60%",border:'solid lightblue 1',height:10,backgroundColor:"lightblue",borderRadius:23}}>
<div style={{width:"50%",height:10,backgroundColor:"blue"}}>

</div>
</div>
<div>

</div>
 </div>
 <div style={{display:"flex",alignItems:"center",marginLeft:44}}>

 <p style={{fontSize:22,fontWeight:"bold",marginRight:40}}>Quize 1: Javascript </p>
 <div style={{width:"60%",border:'solid lightblue 1',height:10,backgroundColor:"lightblue",borderRadius:23}}>
<div style={{width:"70%",height:10,backgroundColor:"blue"}}>

</div>
</div>
<div>

</div>
 </div>
        </div>
    )
}