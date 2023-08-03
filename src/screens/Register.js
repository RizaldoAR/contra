import {Formik} from 'formik';
import React, {useState} from 'react';
import {TextInput, HelperText, Button, Text} from 'react-native-paper';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import HeaderBar2 from '../components/HeaderBar2';
import axios from 'axios';
import * as yup from 'yup';
import {ScrollView} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
export default function Register() {
  const navigation = useNavigation();
  const [title] = useState('FORM SCREENING');
  const handleSubmit = async values => {
    setLoading(true);
    await daftar(values);
  };

  //Upload Image
  const [image, setImage] = useState('');
  const [image2, setImage2] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [imagePath2, setImagePath2] = useState('');
  const [vaksin, setVaksin] = useState('');
  const [rapid, setRapid] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');

  const [loading, setLoading] = useState(false);
  const [showpesan, setShowpesan] = useState(false);
  const [pesanerror, setPesanerror] = useState('');

  const options = {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  };
  const openGallery = async () => {
    const images = await launchImageLibrary(options);
    setImage(images);
    var namafile = images.assets[0].fileName;
    var new_namafile = namafile.replace('rn_image_picker_lib_temp_', '');
    setText2(new_namafile);

    // console.log(images.assets[0].fileName);
  };
  const openGallery2 = async () => {
    const images = await launchImageLibrary(options);
    setImage2(images);
    var namafile = images.assets[0].fileName;
    var new_namafile = namafile.replace('rn_image_picker_lib_temp_', '');
    setText3(new_namafile);
    // console.log(images.assets[0].fileName);
  };

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email must be a valid email')
      .required('Email is a required field'),
    password: yup
      .string()
      .required('Please enter your password')
      .min(8, ({min}) => 'Password must be at least 8 characters'),
  });

  const daftar = async values => {
    const formdata = new FormData();
    formdata.append('image', {
      uri: image.assets[0].uri,
      type: image.assets[0].type,
      name: image.assets[0].fileName,
    });
    formdata.append('image2', {
      uri: image2.assets[0].uri,
      type: image2.assets[0].type,
      name: image2.assets[0].fileName,
    });
    console.log(formdata);
    await axios
      .post('http://aldo.sutralian.online/api/upload', formdata, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        setImagePath(res.data.data[0].file_path);
        console.log(imagePath);

        setImagePath2(res.data.data[1].file_path);
        console.log(imagePath2);
        callGetUsersList(values);
      })

      .catch(err => {
        console.log(err.response);
        setPesanerror('Upload Gambar terjadi error');
        setShowpesan(true);
        setLoading(false);
      });
  };

  const callGetUsersList = async values => {
    const param = {
      email: values.email,
      password: values.password,
      nama_lengkap: values.nama,
      nim: values.nim,
      program_studi: values.program_studi,
      jurusan: values.jurusan,
      jenis_kelamin: values.jenis_kelamin,
      nik: values.nik,
      tempat_tanggal_lahir: values.tempat_tanggal_lahir,
      nama_orangtua: values.nama_orang_tua,
      no_hp_darurat_daerah: values.no_hp_darurat1,
      no_hp_darurat_lampung: values.no_hp_darurat2,
      alamat_asal: values.alamat_ktp,
      alamat_lampung: values.alamat_dom_lpg,
      role_id: 2,
      sertifikat_vaksin: imagePath2,
      hasil_test_rapid: imagePath,
    };
    console.log(param);
    const config = {
      method: 'post',
      url: 'http://aldo.sutralian.online/api/auth/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: param,
    };
    axios(config)
      .then(response => {
        console.log(response);
        console.log('berhasil');
        navigation.replace('Login');
      })
      .catch(error => {
        console.log(error.response);
        setPesanerror('Registrasi error silahkan coba lagi');
        setShowpesan(true);
        setLoading(false);
        // Alert.alert('Error', error);
        // navigation.replace('Lapor');
      });
  };
  const getLoader = () => {
    if (loading) {
      return <ActivityIndicator size="large"></ActivityIndicator>;
    }
  };
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{
        email: '',
        password: '',
        nama: '',
        nim: '',
        program_studi: '',
        jurusan: '',
        jenis_kelamin: '',
        tempat_tanggal_lahir: '',
        nik: '',
        nama_orang_tua: '',
        no_hp_darurat1: '',
        no_hp_darurat2: '',
        alamat_ktp: '',
        alamat_dom_lpg: '',
      }}
      onSubmit={handleSubmit}>
      {({
        isSubmitting,
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
      }) => (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text>Nama Lengkap :</Text>
              <TextInput
                mode="outlined"
                value={values.nama}
                onChangeText={handleChange('nama')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>NIM :</Text>
              <TextInput
                mode="outlined"
                value={values.nim}
                onChangeText={handleChange('nim')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Program Studi :</Text>
              <TextInput
                mode="outlined"
                value={values.program_studi}
                onChangeText={handleChange('program_studi')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Jurusan :</Text>
              <TextInput
                mode="outlined"
                value={values.jurusan}
                onChangeText={handleChange('jurusan')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Jenis Kelamin :</Text>
              <TextInput
                mode="outlined"
                value={values.jenis_kelamin}
                onChangeText={handleChange('jenis_kelamin')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Tempat Tanggal Lahir :</Text>
              <TextInput
                mode="outlined"
                value={values.tempat_tanggal_lahir}
                onChangeText={handleChange('tempat_tanggal_lahir')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>NIK :</Text>
              <TextInput
                mode="outlined"
                value={values.nik}
                onChangeText={handleChange('nik')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Nama Orang Tua :</Text>
              <TextInput
                mode="outlined"
                value={values.nama_orang_tua}
                onChangeText={handleChange('nama_orang_tua')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>No HP Darurat Pihak asal daerah :</Text>
              <TextInput
                mode="outlined"
                value={values.no_hp_darurat1}
                onChangeText={handleChange('no_hp_darurat1')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>No HP Darurat Pihak domisili di lampung :</Text>
              <TextInput
                mode="outlined"
                value={values.no_hp_darurat2}
                onChangeText={handleChange('no_hp_darurat2')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Alamat sesuai KTP :</Text>
              <TextInput
                mode="outlined"
                value={values.alamat_ktp}
                onChangeText={handleChange('alamat_ktp')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Alamat dom lampung :</Text>
              <TextInput
                mode="outlined"
                value={values.alamat_dom_lpg}
                onChangeText={handleChange('alamat_dom_lpg')}
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Email :</Text>
              <TextInput
                mode="outlined"
                value={values.email}
                onChangeText={handleChange('email')}
                error={touched.email && errors.email}
                style={styles.input}
              />
              <HelperText type="error" visible={touched.email && errors.email}>
                {errors.email}
              </HelperText>
            </View>
            <View style={styles.inputContainer}>
              <Text>Password :</Text>
              <TextInput
                secureTextEntry={true}
                mode="outlined"
                value={values.password}
                onChangeText={handleChange('password')}
                left={<TextInput.Icon icon="key" />}
                error={touched.password && errors.password}
                style={styles.input}
              />
              <HelperText
                type="error"
                visible={touched.password && errors.password}>
                {errors.password}
              </HelperText>
            </View>
            <View style={styles.textContainer2}>
              <Text style={styles.textInfo} variant="bodyMedium">
                Mohon lampirkan bukti hasil test Rapid Antigen / PCR swab tes
                Covid-19 :
              </Text>
              <Text>{text2}</Text>
            </View>
            <View style={styles.Button}>
              <Button icon="upload" mode="contained" onPress={openGallery}>
                Upload File
              </Button>
            </View>
            <View style={styles.textContainer2}>
              <Text style={styles.textInfo} variant="bodyMedium">
                Mohon lampirkan sertifikat vaksin Covid-19 :
              </Text>
              <Text>{text3}</Text>
            </View>
            <View style={styles.Button}>
              <Button icon="upload" mode="contained" onPress={openGallery2}>
                Upload File
              </Button>
            </View>
            <View style={styles.errorContainer}>
              <HelperText type="error" visible={showpesan}>
                {pesanerror}
              </HelperText>
            </View>
            <View style={styles.inputContainer}>
              {getLoader()}
              <Button
                buttonColor="#F4D013"
                mode="contained"
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.fontButton}>DAFTAR</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 20,
    backgroundColor: '#ffff',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {},
  inputbutton: {},
  fontButton: {
    color: '#F5F5F5',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
  },
  Button: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  errorContainer: {
    alignItems: 'center',
  },
});
