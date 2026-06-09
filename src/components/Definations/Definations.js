
import React from 'react';
import "./Defination.css"

const Definations = ({word,category,meanings,lightMode})=>{
    return (
        <div className="meanings">
{
  word &&
  category === "en" &&
  meanings?.[0]?.phonetics?.[0]?.audio && (
    <audio
      controls
      src={meanings[0].phonetics[0].audio}
      style={{
        width: "100%",
        marginBottom: "10px"
      }}
    />
  )
}
          {word ==="" ? (<span className="subTitle">Start by typing a word in search</span>) : 
           (meanings.map((mean)=>(
            mean.meanings.map((item)=>(
                item.definitions.map((def)=>(
                    <div key={def.index} className="singleMean" style={{backgroundColor:lightMode ? "#000":"#fff",color:lightMode?"#fff": "#000"
                    }}>
                        <b>{def.definition}</b>
                        <hr style={{backgroundColor:"black",width:"100%"}} />
                        {
                            def.example && (
                                <span>
                                    <b>Example : </b>
                                    {def.example}
                                </span>
                            )
                        }
                        {
                            def.synonyms && (
                                <span>
                                    <b>synonyms :</b>
                                    {def.synonyms}
                                </span>
                            )
                        }
                    </div>
                ))
            ))
           ))) }
        </div>
    )
}

export default Definations