package OTCSWIDGETS

/**
 *  This is a good place to put documentation about your OSpace.
 */
public object OTCSWIDGETSRoot

	public		Object	Globals = OTCSWIDGETS::OTCSWIDGETSGlobals



	/**
	 *  Content Server Startup Code
	 */
	public function Void Startup()
		
			//
			// Initialize globals object
			//
		
			Object	globals = $OTCSWIDGETS = .Globals.Initialize()
		
			//
			// Initialize objects with __Init methods
			//
		
			$Kernel.OSpaceUtils.InitObjects( globals.f__InitObjs )
		
		end

end
