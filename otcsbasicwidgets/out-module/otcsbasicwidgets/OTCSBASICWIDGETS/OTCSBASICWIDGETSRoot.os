package OTCSBASICWIDGETS

/**
 *  This is a good place to put documentation about your OSpace.
 */
public object OTCSBASICWIDGETSRoot

	public		Object	Globals = OTCSBASICWIDGETS::OTCSBASICWIDGETSGlobals



	/**
	 *  Content Server Startup Code
	 */
	public function Void Startup()
		
			//
			// Initialize globals object
			//
		
			Object	globals = $OTCSBASICWIDGETS = .Globals.Initialize()
		
			//
			// Initialize objects with __Init methods
			//
		
			$Kernel.OSpaceUtils.InitObjects( globals.f__InitObjs )
		
		end

end
