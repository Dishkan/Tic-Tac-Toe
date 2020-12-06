import React, { Component } from 'react';
 import {
   StyleSheet,
   View,
   Text,
   StatusBar,
   TouchableOpacity
 } from 'react-native';

 let x_o = 0;
 export default class App extends Component
 {
   state={
  btn1:'',btn2:'',btn3:'',btn4:'',btn5:'',btn6:'',btn7:'',btn8:'',btn9:'',btn10:'',btn11:'',btn12:'',
  box1:'',box2:'',box3:'',box4:'',box5:'',box6:'',box7:'',box8:'',box9:'',box10:'',box11:'',box12:'',
  won:'X turn!',disable:false
   }

   //fill color on combination starts


   //fill color on combination ends

   //geting winner starts
   getwinner()
   {
      //check all posibilities

     if (this.state.btn1 !== '' && this.state.btn1 === this.state.btn2 && this.state.btn1 == this.state.btn3 && this.state.btn1 == this.state.btn4)
     {
      // this.selectwinner(this.state.box1,this.state.box2,this.state.box3)
      this.setState({box1:{backgroundColor:'#7B68EE'}, box2:{backgroundColor:'#7B68EE'},box3:{backgroundColor:'#7B68EE'},box4:{backgroundColor:'#7B68EE'}})
      this.setState({won:this.state.btn1 + ' Won'})
      this.setState({disable:true})
     }
     if (this.state.btn5 !== '' && this.state.btn5 === this.state.btn6 && this.state.btn5 === this.state.btn7 && this.state.btn5 === this.state.btn8)
     {
      // this.selectwinner(this.state.box4,this.state.box5,this.state.box6);
      this.setState({box5:{backgroundColor:'#7B68EE'}, box6:{backgroundColor:'#7B68EE'},box7:{backgroundColor:'#7B68EE'}, box8:{backgroundColor:'#7B68EE'}})
      this.setState({won:this.state.btn5 + ' Won'})
      this.setState({disable:true})

     }

     if (this.state.btn9 !== '' && this.state.btn9 === this.state.btn10 && this.state.btn9 === this.state.btn11 && this.state.btn9 === this.state.btn12)
     {
     //this.selectwinner(this.state.box7,this.state.box8,this.state.box9);
     this.setState({box9:{backgroundColor:'#7B68EE'}, box10:{backgroundColor:'#7B68EE'},box11:{backgroundColor:'#7B68EE'},box12:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn9 + ' Won'})
     this.setState({disable:true})

     }

     if (this.state.btn1 !== '' && this.state.btn1 === this.state.btn5 && this.state.btn1 === this.state.btn9)
     {
     // this.selectwinner(this.state.box1,this.state.box4,this.state.box7);
     this.setState({box1:{backgroundColor:'#7B68EE'}, box5:{backgroundColor:'#7B68EE'},box9:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn1 + ' Won'})
     this.setState({disable:true})

     }

     if (this.state.btn2 !== '' && this.state.btn2 === this.state.btn6 && this.state.btn2 === this.state.btn10)
     {
     // this.selectwinner(this.state.box2,this.state.box5,this.state.box8);
     this.setState({box2:{backgroundColor:'#7B68EE'}, box6:{backgroundColor:'#7B68EE'},box10:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn2 + ' Won'})
     this.setState({disable:true})

     }

     if (this.state.btn3 !== '' && this.state.btn3 === this.state.btn7 && this.state.btn3 === this.state.btn11)
     {
     // this.selectwinner(this.state.box3,this.state.box6,this.state.box9);
     this.setState({box3:{backgroundColor:'#7B68EE'}, box7:{backgroundColor:'#7B68EE'},box11:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn3 + ' Won'})
     this.setState({disable:true})


     }
     if (this.state.btn4 !== '' && this.state.btn4 === this.state.btn8 && this.state.btn4 === this.state.btn12)
     {
     // this.selectwinner(this.state.box3,this.state.box6,this.state.box9);
     this.setState({box4:{backgroundColor:'#7B68EE'}, box8:{backgroundColor:'#7B68EE'},box12:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn4 + ' Won'})
     this.setState({disable:true})
     }

     if (this.state.btn1 !== '' && this.state.btn1 === this.state.btn6 && this.state.btn1 === this.state.btn11)
     {
     // this.selectwinner(this.state.box1,this.state.box5,this.state.box9);
     this.setState({box1:{backgroundColor:'#7B68EE'}, box6:{backgroundColor:'#7B68EE'},box11:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn1 + ' Won'})
     this.setState({disable:true})

     }
    
    if (this.state.btn2 !== '' && this.state.btn2 === this.state.btn7 && this.state.btn2 === this.state.btn12)
     {
     // this.selectwinner(this.state.box1,this.state.box5,this.state.box9);
     this.setState({box2:{backgroundColor:'#7B68EE'}, box7:{backgroundColor:'#7B68EE'},box12:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn2 + ' Won'})
     this.setState({disable:true})

     }

     if (this.state.btn3 !== '' && this.state.btn3 === this.state.btn6 && this.state.btn3 === this.state.btn9)
     {
     // this.selectwinner(this.state.box3,this.state.box5,this.state.box7);
     this.setState({box3:{backgroundColor:'#7B68EE'}, box6:{backgroundColor:'#7B68EE'},box9:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn3 + ' Won'})
     this.setState({disable:true})

     }
     
     if (this.state.btn4 !== '' && this.state.btn4 === this.state.btn7 && this.state.btn4 === this.state.btn10)
     {
     // this.selectwinner(this.state.box3,this.state.box5,this.state.box7);
     this.setState({box4:{backgroundColor:'#7B68EE'}, box7:{backgroundColor:'#7B68EE'},box10:{backgroundColor:'#7B68EE'}})
     this.setState({won:this.state.btn4 + ' Won'})
     this.setState({disable:true})
     } 

   }
   // getting winner ends

   //handeling button press starts
   btnpress(txt)
   {
  switch (txt)
  {
    case 1:
     if (this.state.btn1 !== 'X' && this.state.btn1 !== 'O')
     {
      if (x_o % 2 === 0)
      {
       console.log(x_o);
       // this.setState({btn1:'X'})
       this.setState({btn1:'X'}, () => {
      console.log(this.state.btn1);
      this.getwinner();
       });
       this.setState({won:'O turn now'})
       x_o += 1;
      }
      else
      {
       console.log(x_o);
       this.setState({btn1:'O'}, () => {
      console.log(this.state.btn1);
      this.getwinner();
       });
       this.setState({won:'X turn now'})

       x_o += 1;
      }            
     }
   break;
    case 2:
     if (this.state.btn2 !== 'X' && this.state.btn2 !== 'O')
     {
      if (x_o % 2 === 0)
      {
       console.log(x_o);
       this.setState({btn2:'X'}, () => {
      console.log(this.state.btn2);
      this.getwinner();
       });
       this.setState({won:'O turn now'})
       x_o += 1;


      }
      else
      {
       console.log(x_o);
       this.setState({btn2:'O'}, () => {
      console.log(this.state.btn2);
      this.getwinner();
       });
       this.setState({won:'X turn now'})
       x_o += 1;

      }            
     }
   break;

   case 3:
    if (this.state.btn3 !== 'X' && this.state.btn3 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn3:'X'}, () => {
        console.log(this.state.btn3);
        this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn3:'O'}, () => {
        console.log(this.state.btn3);
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;

     }            
    }
   break;

   case 4:
    if (this.state.btn4 !== 'X' && this.state.btn4 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn4:'X'}, () => { 
        console.log(this.state.btn4);
        this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn4:'O'}, () => {
        console.log(this.state.btn4);
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;

     }            
    }
   break;

   case 5:
    if (this.state.btn5 !== 'X' && this.state.btn5 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn5:'X'}, () => {
        console.log(this.state.btn5);
        this.getwinner();
      });
      this.setState({won:'O turn now'})                      
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn5:'O'}, () => {
        console.log(this.state.btn5);
        this.getwinner();
      });
      this.setState({won:'X turn now'})                      
      x_o += 1;

     }            
    }
   break;

   case 6:
    if (this.state.btn6 !== 'X' && this.state.btn6 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn6:'X'}, () => {
        this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn6:'O'}, () => {
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;

     }            
    }
   break;

   case 7:
    if (this.state.btn7 !== 'X' && this.state.btn7 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn7:'X'}, () => {
        this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn7:'O'}, () => {
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;


     }            
    }
   break;

   case 8:
    if (this.state.btn8 !== 'X' && this.state.btn8 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn8:'X'}, () => {
        this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn8:'O'}, () => {
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;


     }            
    }
   break;

   case 9:

if (this.state.btn9 !== 'X' && this.state.btn9 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn9:'X'}, () => {
      this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn9:'O'}, () => {
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;            

     }            
    }
   break;

   case 10:

if (this.state.btn10 !== 'X' && this.state.btn10 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn10:'X'}, () => {
      this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn10:'O'}, () => {
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;            

     }            
    }
   break;
   case 11:

if (this.state.btn11 !== 'X' && this.state.btn11 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn11:'X'}, () => {
      this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn11:'O'}, () => {
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;            

     }            
    }
   break;
   case 12:

if (this.state.btn12 !== 'X' && this.state.btn12 !== 'O')
    {
     if (x_o % 2 === 0)
     {
      console.log(x_o);
      this.setState({btn12:'X'}, () => {
      this.getwinner();
      });
      this.setState({won:'O turn now'})
      x_o += 1;


     }
     else
     {
      console.log(x_o);
      this.setState({btn12:'O'}, () => {
        this.getwinner();
      });
      this.setState({won:'X turn now'})
      x_o += 1;            

     }            
    }
   break;
  }

  if (x_o == 12)
  {
   this.setState({won:'Game tied'})
  }
   }

   playagain= () =>
   {
    this.setState({btn1:'',btn2:'',btn3:'',btn4:'',btn5:'',btn6:'',btn7:'',btn8:'',btn9:'',btn10:'',btn11:'',btn12:'',
      box1:'',box2:'',box3:'',box4:'',box5:'',box6:'',box7:'',box8:'',box9:'',box10:'',box11:'',box12:'',won:'X turn!',disable:false
        })
        x_o = 0;
   }

   render()
   {

  return (
    <View style={styles.container}>
   <StatusBar
   backgroundColor='black'
   >
   </StatusBar>
   <View style={styles.msgbox}>
   <Text style={{fontSize:30, color:'#fff', fontWeight:'bold', textAlign:'center'}}>{this.state.won}</Text>
   </View>
   <View style={styles.container2}>
     <View style={styles.container3}>
    <View style={styles.board}>
      <TouchableOpacity activeOpacity={0.8}  disabled={this.state.disable} style={[styles.row,this.state.box1]} onPress={()=>this.btnpress(1)}>
     <Text style={styles.txt}>{this.state.btn1}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box2]} onPress={()=>this.btnpress(2)}>
     <Text style={styles.txt}>{this.state.btn2}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box3]} onPress={()=>this.btnpress(3)}>
     <Text style={styles.txt}>{this.state.btn3}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box4]} onPress={()=>this.btnpress(4)}>
     <Text style={styles.txt}>{this.state.btn4}</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.board}>
      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box5]} onPress={()=>this.btnpress(5)}>
     <Text style={styles.txt}>{this.state.btn5}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box6]} onPress={()=>this.btnpress(6)}>
     <Text style={styles.txt}>{this.state.btn6}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box7]} onPress={()=>this.btnpress(7)}>
     <Text style={styles.txt}>{this.state.btn7}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box8]} onPress={()=>this.btnpress(8)}>
     <Text style={styles.txt}>{this.state.btn8}</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.board}>
      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box9]} onPress={()=>this.btnpress(9)}>
     <Text style={styles.txt}>{this.state.btn9}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box10]} onPress={()=>this.btnpress(10)}>
     <Text style={styles.txt}>{this.state.btn10}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box11]} onPress={()=>this.btnpress(11)}>
     <Text style={styles.txt}>{this.state.btn11}</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} disabled={this.state.disable} style={[styles.row,this.state.box12]} onPress={()=>this.btnpress(12)}>
     <Text style={styles.txt}>{this.state.btn12}</Text>
      </TouchableOpacity>
    </View>
    </View>
   </View>   
     <TouchableOpacity activeOpacity={0.8} style={styles.playagain} onPress={this.playagain} >
     <Text style={{color:'white', textAlign:'center',fontSize:25,color:'black', fontWeight:'bold'}}>Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
     <Text style={{color:'white',paddingTop:10, textAlign:'center',fontSize:13,color:'black', fontWeight:'bold'}}>Created by Dishkan</Text>
      </TouchableOpacity>
    </View>
  )
   }
 }

 const styles = StyleSheet.create({
   container:
   {
  flex:1,
  justifyContent:'center',
  padding:10,
  backgroundColor:'skyblue'
   },
   container2:{
  width:'100%',
  height:'70%',
   },
   container3:{
    height:'95%',
   },
   board:{
  flex:1,
  flexDirection:'row'
   },
   row:
   {
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'white',
  borderWidth:3,
  borderColor:'black',
  borderRadius:60
   },
   playagain:
   {
  width:'60%',
  backgroundColor:'#00FA9A',
  alignSelf:'center',
  height:50,
  marginTop:10,  
  justifyContent:'center'  ,

borderRadius:60

   },

   txt:{
  fontWeight:'bold',
  fontSize:40,
  color:'#20B2AA',

   },
   msgbox:{
  borderRadius: 60,
  width:'100%',
  backgroundColor:'#FA8072',
  alignSelf:'center',
  height:60,
  marginBottom:13,  
  justifyContent:'center',

   }
 })