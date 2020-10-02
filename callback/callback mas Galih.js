function create(data, callback) {
  $nama = data.nama,
    $umur = data.umur

  let error = true

  if (error) {
    // return callback('ini erorr')
    callback(error)
  } else {
    return callback(null, 'yang ini berhasil')
  }
}

let biodata = {
  nama: 'Galih',
  umur: 17
}

let user = create(biodata, (err, sukses) => {
  if (err == true) {
    console.log('eror');
  } else {
    console.log(sukses);
  }
})
