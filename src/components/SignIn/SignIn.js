import { Button, Card, Form, Input } from "antd";
import './SignIn.css'
import logo from '../../assets/logo/logo.png'





const SignIn = () => {





    return (
        <Card className="sign-in-card">
            <div className="sign-in-logo">
                <a href="https://aksoyfirat.net/about" target="_blank"><img className="logo" alt="logo" src={logo} /></a>
            </div>
            <Form name="login-form" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} autoComplete="off">
                <Form.Item label="Kullanıcı adınız" name="k-adi" rules={[{ required: true, message: "Kullanıcı adı giriniz !" }]}>
                    <Input.Search autoFocus placeholder="Kullanıcı Adınız" />
                </Form.Item>
                <Form.Item label="Kullanıcı şifre" name="password" rules={[{ required: true, message: "Kullanıcı Parolası Giriniz !" }, {
                    min: 8, message: "Parolanız en az 8 karakter olmalı !"
                }]}>
                    <Input.Password placeholder="********" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Giriş Yap
                    </Button>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="secondary" className="w-full" >
                        Kayıt Ol !
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
export default SignIn