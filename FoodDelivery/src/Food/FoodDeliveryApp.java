package Food;
import java.awt.EventQueue;
import java.util.*;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JTextField;
import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.awt.Color;
import java.awt.Font;
import java.awt.Image;

import javax.swing.SwingConstants;
import javax.swing.JLabel;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
public class FoodDeliveryApp {

	private JFrame frame;
	private JTextField passwordField;
	private JTextField usernameField;
	private JButton New_submit;
	private JTextField user_field;
	private JTextField password_field;
	private Map<String,String> map=new HashMap<String,String>();
	private JLabel lblNewLabel;
	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					FoodDeliveryApp window = new FoodDeliveryApp();
					window.frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}	

	/**
	 * Create the application.
	 */
	public FoodDeliveryApp() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frame = new JFrame();
		frame.setIconImage(Toolkit.getDefaultToolkit().getImage("C:\\Users\\A Kumar\\Desktop\\Github\\Project\\FoodDelivery\\src\\image\\icon.jpg"));
		frame.setTitle("Welcome To Online Food Service :)");
		frame.getContentPane().setFont(new Font("Sitka Subheading", Font.BOLD | Font.ITALIC, 12));
		frame.setBounds(100, 100, 570, 438);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setResizable(true);
		frame.getContentPane().setLayout(null);
		passwordField = new JTextField();
		passwordField.setColumns(10);
		passwordField.setBounds(195, 111, 212, 29);
		frame.getContentPane().add(passwordField);
		usernameField = new JTextField();
		usernameField.setColumns(10);
		usernameField.setBounds(195, 52, 212, 29);
		frame.getContentPane().add(usernameField);
		
		JButton submit = new JButton("SUBMIT");
		submit.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String s1=usernameField.getText();
				String s2=passwordField.getText();
				/*if(!(map.containsKey(s1) && map.containsValue(s2))) {
					JOptionPane.showMessageDialog(frame,"Enter valid username or password :(");
					return;
				}*/	
				Order_Food.main(null);
				frame.dispose();
			}
			
		});
		
		submit.setBackground(Color.CYAN);
		submit.setForeground(Color.BLUE);
		submit.setFont(new Font("Tahoma", Font.BOLD | Font.ITALIC, 12));
		submit.setBounds(246, 181, 96, 29);
		frame.getContentPane().add(submit);
		
		New_submit = new JButton("CREATE NEW ACCOUNT :)");
		New_submit.setBackground(Color.LIGHT_GRAY);
		New_submit.setForeground(Color.RED);
		New_submit.setFont(new Font("Sitka Subheading", Font.BOLD | Font.ITALIC, 11));
		New_submit.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				Fillform.main(null);
			}
		});
		New_submit.setBounds(215, 232, 169, 29);
		frame.getContentPane().add(New_submit);
		
		user_field = new JTextField();
		user_field.setHorizontalAlignment(SwingConstants.CENTER);
		user_field.setEditable(false);
		user_field.setFont(new Font("Tahoma", Font.BOLD | Font.ITALIC, 12));
		user_field.setBackground(Color.CYAN);
		user_field.setForeground(Color.BLUE);
		user_field.setText("USER NAME");
		user_field.setColumns(10);
		user_field.setBounds(20, 51, 96, 29);
		frame.getContentPane().add(user_field);
		
		password_field = new JTextField();
		password_field.setHorizontalAlignment(SwingConstants.CENTER);
		password_field.setEditable(false);
		password_field.setBackground(Color.CYAN);
		password_field.setForeground(Color.BLUE);
		password_field.setFont(new Font("Tahoma", Font.BOLD | Font.ITALIC, 12));
		password_field.setText("PASSWORD");
		password_field.setColumns(10);
		password_field.setBounds(20, 110, 96, 29);
		frame.getContentPane().add(password_field);
		
		JLabel bgLabel = new JLabel("");
		bgLabel.setBounds(0, 0, 554, 399);
		frame.getContentPane().add(bgLabel);
		
		/*lblNewLabel = new JLabel("");
		lblNewLabel.setIcon(new ImageIcon("C:\\Users\\A Kumar\\Desktop\\Github\\Project\\FoodDelivery\\src\\image\\restaurant2.jpg"));
		lblNewLabel.setBounds(0, 0, 554, 399);
		frame.getContentPane().add(lblNewLabel);*/
		BufferedImage img = null;
		try {
		    img = ImageIO.read(new File("C:\\Users\\A Kumar\\Desktop\\Github\\Project\\FoodDelivery\\src\\image\\view.jpg"));
		} catch (IOException e) {
		    e.printStackTrace();
		}
		Image dimg = img.getScaledInstance(frame.getWidth(), frame.getHeight(),Image.SCALE_SMOOTH);
		ImageIcon imageIcon = new ImageIcon(dimg);
		bgLabel.setIcon(imageIcon);
		
	}
}
