// -------------------------- Digital Flags --------------------- //

var isFromDigitalHomePage = false;

// -------------------------- Digital Flags --------------------- //


// -------------------------- Load Digital Tab --------------------- //
function loadDigitalTab()
{
    $.each(jsonData.category, function(key, item){
                if((jsonData.digitalAreas.indexOf(item.categoryid) != -1) && (item.subscribe == "yes") && (jsonData.digitalAreas.length != 0) && (jsonData.digitalAreas.length > 0))
                    {
                        $('#digitalAreaHomePageTab').css('display', 'block');
                    }
           });
}

// -------------------------- Load Digital Tab --------------------- //


// -------------------------- Load Digital Contents --------------------- //

function loadDigitalContents()
{
    isFromDigitalHomePage = true;
    
    // Loads Digital TA's under Digital Tab
    loadSubscribedDigitalAreas();
}

// -------------------------- Load Digital Contents --------------------- //


// -------------------------- Load Subscribed Technology Areas under Digital ------------------------ //

function loadSubscribedDigitalAreas()
{
    var digitalTechnologyAreaHTML = '';
    
    $.each(jsonData.digitalAreas, function(key, item){
                digitalTechnologyAreaHTML += generateDigitalTechnologyAreaHTML(item);
           });
    
    $('#digitalAreaHomePageTechnologyArea').html(digitalTechnologyAreaHTML);
    
    openDigitalTechnologyAreaTab();
    
    areaCounter = 0;
}
var areaCounter = 0;
function generateDigitalTechnologyAreaHTML(areaId)
{
    var strHTMLCategory = '';

    

    $.each(jsonData.category,function(key, item) {
    

							console.log(item.subscribe + ' *****##***** ' + item.categoryid);
							if (item.subscribe == "yes" && item.categoryid == areaId) {

						

								strHTMLCategory = strHTMLCategory
										+ "<div class='listItemClick'><div class=dynamicDivList><a id="
										+ item.categoryname
										+ " class='anchorCategory'  href='#TAListResult' onclick='digiPageFlag = true;showTAListResult("
										+ JSON.stringify(item.categoryname)
										+ " , "
										+ JSON.stringify(item.categoryid)
										+ ")'>";
								strHTMLCategory = strHTMLCategory
										+ "<div style='color:white;margin-left:3.5%;'> "
										+ item.categoryname
										+ "<img src='images/icon_whiteRight.png' width='13' height='13' style='float:right;padding-right:4%;'/>";
								strHTMLCategory = strHTMLCategory
										+ "</div></a></div></div>";
							}
						});
    
    
    return strHTMLCategory;
}

// -------------------------- Load Subscribed Technology Areas under Digital ------------------------ //


function openDigitalTechnologyAreaTab()
{
    $('#digitalTechAreaArrow').html("<img src='images/icon_whiteDown.png' width='13' height='13' style='float:right;padding-right:20%;'/>");
    $('#digitalAreaHomePageTechnologyArea').css('display', 'block');
}
