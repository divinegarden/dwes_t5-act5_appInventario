'use server'
import { db } from '@/lib/mysql'
import cloudinary from '@/lib/cloudinary'
import { revalidatePath } from 'next/cache';



async function imgCreate(file) {
  console.log(file);

  const fileBuffer = await file.arrayBuffer();

  let mime = file.type;
  let encoding = 'base64';
  let base64Data = Buffer.from(fileBuffer).toString('base64');
  let fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;

  try {
    // Transformamos imagen al subirla
    // width: 600, aspect-ratio: 1
    const result = await cloudinary.uploader.upload(fileUri, {
      invalidate: true,
      folder: "tienda",
      public_id: file.name.split('.').slice(0, -1).join('.'), // eliminamos extensión del archivo
      aspect_ratio: "1.0",
      width: 600,
      crop: "fill",
      gravity: "center"
    })
    console.log(result);
    return result.secure_url
  } catch (error) {
    console.log(error);
    return null
  }
}


/*
OPERACIONES CRUD

C: CREATE -> createArticulo
R: READ   -> getArticulos
U: UPDATE -> updateArticulo
D: DELETE -> deleteArticulo

C: CREATE -> createProveedor
R: READ   -> getProveedores
U: UPDATE -> updateProveedor
D: DELETE -> deleteProveedor
*/

// Articulos

export async function createArticulo(prevState, formData) {
  const nombre = formData.get('nombre');
  const descripcion = formData.get('descripcion');
  const precio = formData.get('precio');
  const file = formData.get('file')

  try {
    let results = null;
    let query = null;

    // si tenemos nuevo archivo en el input type=file
    if (file.size > 0) {
      const imagen = await imgCreate(file)
      query = 'insert into articulos(nombre,descripcion,precio,imagen) values (?, ?, ?, ?)';
      results = await db.query(query, [nombre, descripcion, precio, imagen]);
    } else {
      query = 'insert into articulos(nombre,descripcion,precio) values (?, ?, ?)';
      results = await db.query(query, [nombre, descripcion, precio]);
    }
    // console.log(results);

    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }
}




export async function updateArticulo(prevState, formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')
  const file = formData.get('file')

  try {
    let results = null;
    const query = 'update articulos set ? where id = ? ';

    // si tenemos nuevo archivo en el input type=file
    if (file.size > 0) {
      const imagen = await imgCreate(file)
      results = await db.query(query, [{ nombre, descripcion, precio, imagen }, id]);
    } else {
      results = await db.query(query, [{ nombre, descripcion, precio }, id]);
    }
    // console.log(results);

    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }
}




export async function deleteArticulo(prevState, formData) {
  const id = formData.get('id');

  try {
    const query = 'delete from articulos where id = ?';
    const results = await db.query(query, [id]);
    // console.log(results);

    revalidatePath('/articulos');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }
}

// Proveedores

export async function createProveedor(prevState, formData) {
  const nombre = formData.get('nombre');
  const descripcion = formData.get('descripcion');
  const file = formData.get('file')

  try {
    let results = null;
    let query = null;

    // si tenemos nuevo archivo en el input type=file
    if (file.size > 0) {
      const imagen = await imgCreate(file)
      query = 'insert into proveedores(nombre,descripcion,imagen) values (?, ?, ?)';
      results = await db.query(query, [nombre, descripcion, imagen]);
    } else {
      query = 'insert into proveedores(nombre,descripcion) values (?, ?)';
      results = await db.query(query, [nombre, descripcion]);
    }
    // console.log(results);

    revalidatePath('/proveedores');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }
}




export async function updateProveedor(prevState, formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const file = formData.get('file')

  try {
    let results = null;
    const query = 'update proveedores set ? where id = ? ';

    // si tenemos nuevo archivo en el input type=file
    if (file.size > 0) {
      const imagen = await imgCreate(file)
      results = await db.query(query, [{ nombre, descripcion, imagen }, id]);
    } else {
      results = await db.query(query, [{ nombre, descripcion }, id]);
    }
    // console.log(results);

    revalidatePath('/proveedores');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }
}




export async function deleteProveedor(prevState, formData) {
  const id = formData.get('id');

  try {
    const query = 'delete from proveedores where id = ?';
    const results = await db.query(query, [id]);
    // console.log(results);

    revalidatePath('/proveedores');
    return { success: 'Operación exitosa' }
  } catch (error) {
    console.log(error);
  }
}
