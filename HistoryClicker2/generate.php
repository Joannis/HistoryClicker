<?php

    function generateResBlock($resArr, $type){
	
		for($i=0;$i<count($resArr);$i++){
		
		    echo "<div class='resItem' id='resBlock".$type."'>";
		      
				if($type=='1'){
				    echo "<span class='addRes' onclick='clicky(\"" . $resArr[$i] . "\");'>+</span>";
				}
				
				echo "<div id='".$resArr[$i]."' class='resBlock'>";
				  
				    echo "<div class='resInfo'>";
						echo "<span class='resName' id='".$resArr[$i]."Name'>".$resArr[$i]."</span>";
						
						if($type=='1'){
						    echo "<span class='resGain' id='".$resArr[$i]."Gain'>+0/s</span>";
						}
						
						echo "<span class='resMax' id='".$resArr[$i]."Max'>200</span>";
						echo "<span class='resSlash'>/</span>";
						echo "<span class='resCount' id='".$resArr[$i]."Count' >0</span>";
				    echo "</div>";
				  
				    echo "<div class='resBar' id='".$resArr[$i]."Bar'>";
						echo "<span class='resBarfull' id='".$resArr[$i]."Barfull'></span>";
				    echo "</div>";
				  
				echo "</div>";
		      
		    echo "</div>";
		}
	
    }
    
    function generatePlus($funct, $type){
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", 1)'>+1</div>";
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", 10)'>+10</div>";
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", 100)'>+100</div>";
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", 1000)'>+1000</div>";
    }
    
    function generateMinus($funct, $type){
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", -1000)'>-1000</div>";
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", -100)'>-100</div>";
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", -10)'>-10</div>";
	echo "<div class='add free' onclick='".$funct."(\"".$type."\", -1)'>-1</div>";
    }

?>