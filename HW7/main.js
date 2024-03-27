const destinations = [
    {
      id: 1,
      name: "Hà Nội",
      image: "https://suckhoedoisong.qltns.mediacdn.vn/Images/thanhloan/2020/11/28/Nam-2030-du-lich-ha-noi-phan-dau-tro-thanh-nganh-kinh-te-mui-nhon-cua-thu-do-19.jpg",
      Chiphi: "5.150.000",
    },
    {
      id: 2,
      name: "Sapa",
      image:"https://dulichviet.com.vn/images/bandidau/du-lich-sapa.jpg",
      Chiphi: "6.500.000",
    },
    {
      id: 3,
      name: "Đà Nẵng",
      image:
        "https://static-images.vnncdn.net/files/publish/2023/11/7/at-ve-dep-thanh-pho-da-nang-giu-tron-tung-khoanh-khac-6b555585df3ca96d931cf6f4378c9488-1276.jpg",
      Chiphi: "3.300.000",
    },
  ];
  
  function showDulich() {
    var html = "";
    var d = 0;
    for (var i = 0; i < destinations.length; i++) {
      d++;
      html += "<tr>";
      html += "<td>" + d + "</td>";
      html += "<td>" + destinations[i].name + "</td>";
      html +=
        "<td><img src=" + destinations[i].image + " style='height:100px;width:100px'></td>";
      html += "<td>" + destinations[i].Chiphi + "</td>";
      html +=
        "<td><input type='button' value='Sửa' onclick='editDestination(" +
        i +
        ")' /> <input type='button' value='Xoá' onclick='deleteDestination(" +
        i +
        ")' /></td>";
      html += "</tr>";
    }
    document.getElementById("tbl").innerHTML = html;
  }
  
  function createDestination() {
    var n = destinations.length;
    n++;
    var destinationName = document.getElementById("Name").value;
    var destinationImage = document.getElementById("Image").value;
    var destinationChiphi = document.getElementById("Chiphi").value;
  
    var newDestination = {
      id: n,
      name: destinationName,
      image: destinationImage,
      Chiphi: destinationChiphi,
    };
    destinations.push(newDestination);
    showDulich();
  }
  
  function deleteContent() {
    document.getElementById("Name").value = "";
    document.getElementById("Image").value = "";
    document.getElementById("Chiphi").value = "";
  }
  
  function editDestination(index) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("editForm").style.display = "block";
  
    document.getElementById("editIndex").value = index;
    document.getElementById("editName").value = destinations[index].name;
    document.getElementById("editImage").value = destinations[index].image;
    document.getElementById("editChiphi").value = destinations[index].Chiphi;
  
    document.getElementById("editForm").style.display = "block";
  }
  
  function closeEditForm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("editForm").style.display = "none";
  }
  
  function update() {
    var indexToUpdate = parseInt(document.getElementById("editIndex").value);
    var newName = document.getElementById("editName").value;
    var newImage = document.getElementById("editImage").value;
    var newChiphi = document.getElementById("editChiphi").value;
  
    destinations[indexToUpdate].name = newName;
    destinations[indexToUpdate].image = newImage;
    destinations[indexToUpdate].Chiphi = newChiphi;
    document.getElementById("overlay").style.display = "none";
    document.getElementById("editForm").style.display = "none";
    showDulich();
  }
  
  function deleteDestination(index) {
    destinations.splice(index, 1);
    showDulich();
  }
