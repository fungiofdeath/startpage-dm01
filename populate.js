var lastClicked = null;

function populateList(list, siteList)
{
	siteList.forEach((site, i) => {
		var item = document.createElement("li");
		list.appendChild(item);
		
		if (site.subsites.length > 0)
		{
			var button = document.createElement("a");
			button.classList.add("rbtn");
			button.innerText = "»";
			item.appendChild(button);
			
			var sublist = document.createElement("ul");
			sublist.classList.add("aside");
			sublist.classList.add("sitelist");
			sublist.classList.add("hidden");
			item.appendChild(sublist);
			populateList(sublist, site.subsites);
			
			button.onclick = () => {
				if (lastClicked)
				{
					lastClicked.classList.add("hidden");
				}
				
				sublist.classList.remove("hidden");
				lastClicked = sublist;
			};
			
			// cannot handle nested sublists yet due to css or js
		}
		
		var anchor = document.createElement("a");
		anchor.classList.add("site");
		anchor.href = site.url;
		anchor.innerText = site.name;
		item.appendChild(anchor);
	});
}
function addNewCategory(name, siteList)
{
	var category = document.createElement("article");
	category.classList.add("category");
	document.getElementById("content").appendChild(category);
	
	var header = document.createElement("h2");
	header.innerText = name;
	category.appendChild(header);
	
	var list = document.createElement("ul");
	list.classList.add("sitelist");
	category.appendChild(list);
	
	populateList(list, siteList);
}

///

function readFile(path, mime, callback)
{
	var req = new XMLHttpRequest();
	req.onreadystatechange = () => {
		if (req.readyState == 4 && req.status == "200")
		{
			callback(req.responseText);
		}
	};
	req.overrideMimeType(mime);
	req.open("GET", path, true);
	req.send(null);
}
function populate()
{
	readFile("./sites.json", "application/json", (text) => {
		var data = JSON.parse(text);
		data.types.forEach((type, i) => {
			addNewCategory(type.name, type.sites);
		});
	});
}

document.addEventListener("click", (e) => {
	if (lastClicked && !e.target.classList.contains("rbtn"))
	{
		lastClicked.classList.add("hidden");
	}
});

populate();