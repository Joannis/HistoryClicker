<!DOCTYPE html>
  <html>
    
    <?php
      $username = 'Tistdrive';
      
      include_once('generate.php');
    ?>
    
    <head>
	
	<title>The Clicker</title>
	
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
	<meta content="utf-8" http-equiv="encoding">
	
	<link rel="stylesheet" type="text/css" href="./index.css" />
	
	<script type='text/javascript' src='./JSON/json2.js'></script>
	<script type='text/javascript' src='./index.js'></script>
	
    </head>
    
    <body onload='start()'>
      
      	<input type='checkbox' id='settingsCheck' />
      
      	<div id="header">
      
			<div id='settings'>
			
				<div class='settingsList'>
					<span class='save top left' onclick='save()'>Save</span>
					<span class='load top right' onclick='load()'>Load</span>
					<span class='save bottom left' onclick=''>Button</span>
					<span class='load bottom right' onclick=''>Button</span>
				</div>
				
		    	<label id='settingsButton' for=settingsCheck>Menu</label>
			</div>
	    	
			<div id='logo'>
			  <div id='civclass'>The <span class='civclass' id='civLevel'>Camp</span> of <span id="usernameHeader"></span><a>0 A.D</a></div>
			</div>
		
      	</div>
      
      <div id="leftbar">
	
      </div>
      
      
      <input type='radio' name='contentPage' id='page0' checked/>
      <input type='radio' name='contentPage' id='page1' />
      <input type='radio' name='contentPage' id='page2' />
      <input type='radio' name='contentPage' id='page3' />
      <input type='radio' name='contentPage' id='page4' />
      
      
      <div id="content">
	
	<div id="menu">
	    <label for='page0'>Civilians</label>
	    <label for='page1'>Construction</label>
	    <label for='page2'>Research</label>
	    <label for='page3'>Religion</label>
	    <label for='page4'>Battle</label>
	    <div id='menuBlock'></div>
	</div>
	
	<div id="pages">
	    
	    <div class="page0 page" id="civilians">
		
		<div id="civilianMenu">
		  
		    <div class="block civilians">
			<div></div>
			<span>Civilians: <a id='civCount'>0</a></span>
		    </div>
		    
		    <div class="civAdd">
			
			<div class="add" onclick='addCiv(1)'>
			    +1<br />
			    <span>20 Food</span>
			</div>
			
			<div class="add" onclick='addCiv(10)'>
			    +10<br />
			    <span>200 Food</span>
			</div>
			
			<div class="add" onclick='addCiv(100)'>
			    +100<br />
			    <span>2000 Food</span>
			</div>
			
			<div class="add" onclick='addCiv(1000)'>
			    +1000<br />
			    <span>20000 Food</span>
			</div>
			
		    </div>
			
		    <div class="block" style='float:right'>
			<div></div>
			<span>Unemployed: <a id='unempCount'>0</a></span>
		    </div>
		    
		    <br />
		    <br />
		    <br />
		    <br />
		    
		    <div class="assignField">
			
			<span class='assignTitle'>Assign Civilians:</span>
			
			<?php
			    //Variable, Display Name
			    $asCiv = array(['farmers', 'Farmers'], ['woodcers', 'Woodcutters'], ['miners', 'Miners'], ['armedFarmers', 'Armed Farmers'] );
			    
			    for($i=0;$i<count($asCiv);$i++){
				echo "<div class='".$asCiv[$i][0]." line'>";
				
				    generateMinus('assignCiv', $asCiv[$i][0]);
				    
				    echo "<div class='block'>";
					echo "<span>".$asCiv[$i][1].": <a id='".$asCiv[$i][0]."Count'>0</a></span>";
				    echo "</div>";
				    
				    generatePlus('assignCiv', $asCiv[$i][0]);
				    
				echo "</div>";
			    }
			    
			?>
			
		    </div>
		    
		</div>
		
	    </div>
	    
	    <div class="page1 page" id="constructionTab">
		
		
		<?php
		    // array[ [ClassName, [Variable, Display Name], [nextVar, nextDN]], [ClassName, [Variable, Display Name], [nextVar, nextDN]] ]
		    $build = array(
				    ['Housing:',
					['tent', 'Tents','1 Skins, 10 Wood'],
					['hut', 'Huts', '30 Wood']
				    ],
				    ['Storage:',
					['foodShed', 'Food Storage',],
					['woodShed', 'Wood Storage',],
					['stoneShed', 'Stone Storage']
				    ],
				    ['Raw Material Processing:',
					['smith', 'Smithery'],
					['sawmill', 'Sawmill']
				    ],
				    ['Army:',
					['barracks', 'Barracks'],
					['stable', 'Stable'],
				    ] );
		    
		    for($i=0;$i<count($build);$i++){
			
			if(!($i % 2)){ echo "<div class='buildBlockRow'><div class='buildBlock'>"; }
			else{echo "<div class='buildBlock right'>";}
			
				echo "<span class='buildTitle'>".$build[$i][0]."</span>";
				
				for($a=1;$a<count($build[$i]);$a++){
				    
				    echo "<div class='block' onmousemove='showDesc(event, \"" . $build[$i][$a][0] . "\")' onmouseout='removeDesc()'>";
						echo "<span>".$build[$i][$a][1].": <a id='".$build[$i][$a][0]."Count'>0</a></span>";
				    echo "</div>";
				    
				    generatePlus('construct', $build[$i][$a][0]);
				    
				}
			    
			    echo "</div>";
			
			if($i % 2){ echo "</div>"; }
			
		    }
		    
		?>
			<div id='affinityBuildings'>
				
			</div>
	    </div>
	    
	    <div class="page2 page" id="researchTab">
		Geeks
	    </div>
	    
	    <div class="page3 page" id="religionTab">
			<!-- #JustHTMLthings -->
			<div class='affinityMenu' id='affinityMenu0'>
				<span class='affinityHeader'>Choose your affinity</span><br />
				<div class='affBlock'  id='affBlockLeft'>
					<span class='affinityLink' id='nordic'   onclick='chooseAffinity("nordic")'>Nordic</span>
					<span class='affinityLink' id='germanic' onclick='chooseAffinity("germanic")'>Germanic</span>
					<span class='affinityLink' id='roman'    onclick='chooseAffinity("roman")'>Roman</span>
				</div>
				<div class='affBlock'  id='affBlockRight'>
					<span class='affinityLink' id='egyptian' onclick='chooseAffinity("egyptian")'>Egyptian</span>
					<span class='affinityLink' id='arabic'   onclick='chooseAffinity("arabic")'>Arabic</span>
					<span class='affinityLink' id='arabic'   onclick='chooseAffinity("turk")'>Turkish</span>
				</div>
			</div>
			<div class='religionMenu' id='religionMenu0' style='display: none;'>
				
			</div>
	    </div>
	    
	    <div class="page4 page" id="battleTab">
			Armed farmers
	    </div>
	</div>
	
    </div>
      	<div id="rightbar">
		
		<div id="resources">
	  	<span class='resTitle'>Basic Resources</span>
	  	
	  	<?php  generateResBlock(array('food', 'wood', 'stone'), '1')  ?>
	  	
	  	<span class='resTitle'>Advanced Resources</span>
		
		<?php  generateResBlock(array('skins', 'herbs', 'ore'), '2')  ?>
		
		<span class='resTitle'>Produced Resources</span>
		
		<?php  generateResBlock(array('leather', 'iron', 'faith', 'houses', 'land'), '3');  ?>
		
		<span class='resTitle'>Production Buildings</span>
		
		<?php  generateResBlock(array('smith', 'sawmill', 'research'), '4');  ?>
		
		<span class='resTitle'>Militairy</span>
		
		<?php  generateResBlock(array('barracks', 'stable'), '5');  ?>
	</div>
	</div>
	<div class='tooltip' id='tooltip' style="display: none;"></div>
  </body> 
</html>